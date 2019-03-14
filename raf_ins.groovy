
echo "Updating Superset image tag"
sh "make update_image_tag DOCKER_IMAGE_TAG=${env.dockerTag} SUPERSET_INVENTORY_FILE_PATH=${env.jenkinsInventoryFilePath}"
echo "Updated Superset image tag"

echo "Starting unit test execution."
sh "./scripts/execute_unittest.sh ${env.testWithDatabase}"

echo "Run Commmands to execute code coverage test"

echo "Run Commmands to execute static code analysis test"

echo "Run Commmands to trigger build"
sonarqube()

echo "Run Commmand to trigger rpm build"
sh  "./build_rpm.sh ${VERSION} ${RELEASE}"

rpm_push( env.buildType, 'dist/installer', 'ggn-dev-rpms/raf' )

echo "Creating docker build..."
sh "make docker_build"

echo "Tagging docker image..."
sh "make docker_tag DOCKER_IMAGE_TAG=${env.dockerTag}"

docker_push( env.buildType, 'guavus-superset' )
