echo -e "# # # # # # # START : Creating Postgres Database # # # # # ## #"
psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'superset'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE superset"
echo -e "# # # # # # # START : Creating PostGres User# # # # # # #"
psql -U postgres -tAc "SELECT 1 FROM pg_roles WHERE rolname='postgresuser'" | grep -q 1 || psql -U postgres -c "CREATE USER postgresuser WITH PASSWORD 'pguserpassword';"