SRC_DIR="./superset/assets/output/coverage/jest/lcov-report"
DST_DIR="./"

set -e
tox -e javascript
cp -R "$SRC_DIR" "$DST_DIR"