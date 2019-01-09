echo -e "# # # # # # # START : Creating Postgres Database # # # # # # #"
psql postgres -c "CREATE DATABASE superset;"
echo -e "# # # # # # # START : Creating PostGres User# # # # # # #"
psql postgres -c "CREATE USER postgresuser WITH PASSWORD 'pguserpassword';"