SRC_DIR="./superset/assets/output/coverage/jest/lcov-report/"
DST_DIR="./"

SRC_FILE="index.html"
DEST_FILE="coverage_javascript.html"

set -e
tox -e javascript
cp "$SRC_DIR/$SRC_FILE" "$DST_DIR/$DEST_FILE"