import json
import re
from datetime import timedelta
import logging
from datetime import datetime
#gran valaue map,supported grain by hive db engine
GRAN_VALUE_MAP = {
    'PT1S' : 1,
    'PT1M' : 60,
    'PT1H' : 3600,
    'P1D'  : 86400,
    'P1W'  : 604800,
    'P1M'  : 2629743,
    'P3M'  : 7889229,
    'P0.25Y': 7889229,
    'P1Y'  : 31556926
}

# return seconds from gran valaue map default is 86400
def get_gran_value_in_seconds(value):
    if  value in GRAN_VALUE_MAP:
        return GRAN_VALUE_MAP[value]
    return 86400


def get_partitioned_query(time_partitions):
    query_str = "( "
    if 'year' in time_partitions:
        query_str += time_partitions['year']+" = %Y "
    if 'month' in time_partitions:
        query_str += "AND "+time_partitions['month']+" = %m "
    if 'day' in time_partitions:
        query_str += "AND "+time_partitions['day']+" = %d "
    if 'hour' in time_partitions:
        query_str += "AND "+time_partitions['hour']+" = %H "
    if 'minute' in time_partitions:
        query_str += "AND "+time_partitions['minute']+" = %M "
    query_str += ")"
    return query_str

def get_partitioned_whereclause(_st, _en, gran_seconds, time_partitions):
    time_seq = list()
    # consider here only till < condition because hive store data like that
    # ie 10-11 hr data will exist in 10th hr partition

    # handle same st and ed selection case,single point selection
    if _st == _en:
        time_seq.append(_st.strftime(get_partitioned_query(time_partitions)))

    while _st < _en:
        time_seq.append(_st.strftime(get_partitioned_query(time_partitions)))
        _st = _st + timedelta(seconds=gran_seconds)

    where_clause = " OR ".join(time_seq)

    # all time based  condition  should be in AND with other filters
    if time_seq and len(time_seq) > 1:
        where_clause = " ( " + where_clause + " ) "

    return where_clause

def replace_whereclause_in_org_sql(granularity, sql, where_clause, granularity_in_partitions):
    sql_updated = sql
    if granularity_in_partitions:
        # regex for  `granularity` >= 1549497600 type of string
        # any word regex (?:[a-z][a-z]+)
        regex_st = "(`)("+granularity+")(`)(\\s+)(>)(=)(\\s+)(\\d+)"
        # regex for `granularity` <= 1549497600
        regex_et = "(AND)(\\s+)(`)("+granularity+")(`)(\\s+)(<)(=)(\\s+)(\\d+)"

        sql_updated = re.sub(regex_st, where_clause, sql)
        sql_updated = re.sub(regex_et, '\n', sql_updated)
    else:
        sql_updated = sql.replace("WHERE", " WHERE "+ where_clause +" AND ")
    return sql_updated

def get_hive_partitions(database, datasource_name):
    tables = list(filter(lambda tname: (tname.datasource_name == datasource_name), database.tables))
    table = tables[0]
    return table.hive_partitions

def default_hive_query_generator(sql, query_obj, database, datasource_name):
    st_seconds = datetime.now()
    """ schema for time based partition in table
    {
      "time":{
       "year":"year",
         "month":"month",
        "day":"day",
         "hour":"hour",
        "minute":"minute"
         }
    }

     Here we replace simply default time range based
     where clause from sql to specific partition based  where clause
     and returning update sql
    """
    if database.backend == 'hive':
        hive_partitions = get_hive_partitions(database, datasource_name)
        if hive_partitions:
            hive_partitions_obj = json.loads(hive_partitions)
            if 'time' in hive_partitions_obj:
                time_partitions = (hive_partitions_obj['time'])
                st = query_obj['from_dttm']
                en = query_obj['to_dttm']
                time_grain = query_obj['extras']['time_grain_sqla']
                gran_seconds = get_gran_value_in_seconds(time_grain)
                granularity = query_obj['granularity']
                granularity_in_partitions = (granularity in time_partitions)
                if st and en and gran_seconds:
                    where_clause = get_partitioned_whereclause(st, en, gran_seconds, time_partitions)
                    sql_updated = replace_whereclause_in_org_sql(granularity, sql, where_clause, granularity_in_partitions)
                    logging.info('[PERFORMANCE CHECK] Hive Partition Query formation time {0} '.format(datetime.now() - st_seconds))
                    return sql_updated
    logging.info('[PERFORMANCE CHECK] Hive Partition Query formation time {0} '.format(datetime.now() - st_seconds))
    return sql
