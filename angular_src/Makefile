DOCKER_REPOSITORY = artifacts.ggn.in.guavus.com:4245
DOCKER_IMAGE_NAME = dd
DOCKER_IMAGE_TAG = latest

SANITIZED_APP_VERSION = $(shell echo $(APP_VERSION) | sed -e "s/\//-/g")
SANITIZED_VERSION = $(shell echo $(VERSION) | sed -e "s/\//-/g")
BUILD_NUMBER?=0
VERSION=$(BRANCH_ID)

VERSION_WITH_BUILD= $(DOCKER_IMAGE_TAG) #$(SANITIZED_APP_VERSION)_$(BUILD_NUMBER)

.PHONY:  all  build tag push clean

all:	clean build tag push

build:
	echo $(COMMIT)“ ”  $(BRANCH_ID)“ ”$(APP_VERSION)“ “$(BUILD_NUMBER)
	docker build -t $(DOCKER_IMAGE_NAME) .

tag:
	docker tag $(DOCKER_IMAGE_NAME) $(DOCKER_REPOSITORY)/$(DOCKER_IMAGE_NAME):$(VERSION_WITH_BUILD)

push:
	docker push $(DOCKER_REPOSITORY)/$(DOCKER_IMAGE_NAME):$(VERSION_WITH_BUILD)

clean:
	docker images | grep "$(DOCKER_IMAGE_NAME)" | awk '{print $$1":"$$2}' |  xargs docker rmi -f || true
