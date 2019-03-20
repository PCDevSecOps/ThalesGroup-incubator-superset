set -e

echo -e "# # # # # # # STARTING : Integration Test Exceution # # # # # # #"
npm install cypress
tox -e cypress-dashboard
# tox -e cypress-explore
# tox -e cypress-sqllab
echo -e "# # # # # # # COMPLETED : Integration Test Exceution # # # # # # #"