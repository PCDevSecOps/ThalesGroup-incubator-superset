# -*- coding: utf-8 -*-
# pylint: disable=C,R,W
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

from pyhive import hive
from TCLIService import ttypes
from thrift import Thrift

from superset.db_engines.THttpTransport.THttpClientTransport import THttpClientTransport 
from thrift.transport.TTransport import TBufferedTransport

# TODO: contribute back to pyhive.
def fetch_logs(self, max_rows=1024,
               orientation=ttypes.TFetchOrientation.FETCH_NEXT):
    """Mocked. Retrieve the logs produced by the execution of the query.
    Can be called multiple times to fetch the logs produced after
    the previous call.
    :returns: list<str>
    :raises: ``ProgrammingError`` when no query has been started
    .. note::
        This is not a part of DB-API.
    """
    try:
        req = ttypes.TGetLogReq(operationHandle=self._operationHandle)
        logs = self._connection.client.GetLog(req).log
        return logs
    # raised if Hive is used
    except (ttypes.TApplicationException,
            Thrift.TApplicationException):
        if self._state == self._STATE_NONE:
            raise hive.ProgrammingError('No query yet')
        logs = []
        while True:
            req = ttypes.TFetchResultsReq(
                operationHandle=self._operationHandle,
                orientation=ttypes.TFetchOrientation.FETCH_NEXT,
                maxRows=self.arraysize,
                fetchType=1,  # 0: results, 1: logs
            )
            response = self._connection.client.FetchResults(req)
            hive._check_status(response)
            assert not response.results.rows, \
                'expected data in columnar format'
            assert len(response.results.columns) == 1, response.results.columns
            new_logs = hive._unwrap_column(response.results.columns[0])
            logs += new_logs
            if not new_logs:
                break
        return '\n'.join(logs)

def update_connect_args(url , connect_args):
    #  set thrift_transport to handle http transport mode in hive
    if(url.drivername == 'hive'):
        thrift_transport = get_http_thrift_transport(url,connect_args)
        if(thrift_transport is not None):
            connect_args['thrift_transport'] = thrift_transport
    else:
        return        

def get_http_thrift_transport(url , kwargs):
    if ( 'transport_mode' in kwargs  and  kwargs['transport_mode'] == 'http' ):
        host = url.host
        port = url.port
        username = url.username
        
        password = url.password
        if(password is None):
           password = 'x'

        http_path = 'cliservice' 
        if('http_path' in kwargs):
            http_path = kwargs['http_path']
              
        kerberos_service_name = None
        if('kerberos_service_name' in kwargs):
            kerberos_service_name = kwargs['kerberos_service_name']

        mutual_auth = 'OPTIONAL'
        if('mutual_auth' in kwargs):
            mutual_auth = kwargs['mutual_auth']

        auth = "NONE"
        if('auth' in kwargs):
            auth = kwargs['auth']
        
        client = THttpClientTransport("http://{}:{}/{}".format(host, port, http_path))
        if auth == 'KERBEROS':
            client.set_kerberos_auth(mutual_auth,kerberos_service_name)
        else:  
            client.set_basic_auth(username, password)  

        # remove custom vars not req in phive 
        exrta_params = ['transport_mode','mutual_auth','http_path']   
        for param in exrta_params:
            kwargs.pop(param, None)
       
        # reset below value to none as per phive condition to set custom thrift_transport
        kwargs['host'] = None
        kwargs['port'] = None
        kwargs['password'] = None
        kwargs['auth'] = None
        kwargs['kerberos_service_name'] = None    

        return TBufferedTransport(client)
    else:
         return None
     

  