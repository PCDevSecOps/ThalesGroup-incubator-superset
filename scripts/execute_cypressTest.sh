EXECUTION_PATH=$1
set -e

echo -e "# # # # # # # STARTING : Integration Test Exceution # # # # # # #"
ls -a
npm install cypress

echo -e "# # # # # # # # # # # # # # Execution Path # # # # # # # # # # # #"
echo ${EXECUTION_PATH}
echo -e "# # # # # # # # # # # # # # Completed Execution Path # # # # # # # # # # # #"

cd ${EXECUTION_PATH}
tox -e cypress-dashboard
# tox -e cypress-explore
# tox -e cypress-sqllab
echo -e "# # # # # # # COMPLETED : Integration Test Exceution # # # # # # #"