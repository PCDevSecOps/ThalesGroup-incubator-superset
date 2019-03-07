
# **Building, Running and Testing the application**

This document describes how to set up your development environment to build and test the application.
It also explains the basic mechanics of using `git`, `node`, and `npm`.

* [Prerequisite](#prerequisite)
* [Note](#note)
* [Build Dependencies](#build-dependencies)
* [Dependency Fetching](#dependency-fetching)
* [Code scaffolding](#code-scaffolding)
* [Development server](#development-server)
* [Project Configurations](#project-configurations)
* [Run Application offline/online mode](#run-application-in-offlineonline-mode)
* [Development server with AoT](#development-server-with-aot)
* [Production build test server](#production-build-test-server)
* [Production Build](#production-build)
* [Production Build with AoT](#production-build-with-aot)
* [Lint](#lint)
* [Unit Tests](#unit-tests)
* [Coverage Report](#coverage-report)
* [e2e tests](#e2e-tests)
* [Update Changelog](#Update-Changelog)
* [Creating a Docker Image](#creating-a-docker-image)
* [Some More](#some-more)

## Prerequisite

Before you can build and test, you must install and configure the
following products on your development machine:

* [Node.js](http://nodejs.org) (v8.94) and [npm](https://www.npmjs.com/get-npm)(v5.6.0) which is used to run a development web server,
  run tests, and generate distributable files.

* Platform version 5.3.0

## Note

1. `$PROJECT_HOME` is root directory of the project that contains `package.json`.

## Build Dependencies

### Install [Node](https://nodejs.org/en/)

Use `nvm` if necessary, more information [here](https://github.com/creationix/nvm). The node version used in the project is stated in `.nvmrc`.
To check version run

```bash
 cat ./.nvmrc
```

> nvm is not available on Windows.

### Authenticate private NPM registry (Artifactory)

> This project depends on private artifactory that are hosting `@guavus` scoped packages. Validate `.npmrc`(if exist)  then points to correct artifactory with valid permission

 Assume your **artifact** is stored at `http://artifacts.guavus.mtl/` then follow below steps

  1. Go in **Artifactory Profile** and login, copy `ENCRYPTED_PASSWORD`

      ```bash
      curl -u'<USERNAME>:<ENCRYPTED_PASSWORD>' 'http://artifacts.guavus.mtl/api/npm/npm-local/auth/guavus' > ~/.npmrc
     ```

  1. Above command will create `.npmrc` file in Home Directory, we need to copy that file at Project Root Directory.

  1. Content of the file `~/.npmrc` file should look something like this:

      ```text
      @guavus:registry=http://artifacts.guavus.mtl:80/api/npm/npm-local/
      //artifacts.guavus mtl:80/api/npm/npm-local/:_password=QUtDcDJWNXBOR0VNU29R1I5WmpjTUhCMUFQTEhBWUxScFlna2FVV0htblJlaWNLWUJ1b05wMjU0U051SFZIbUM5TQ==
      //artifacts.guavus.mtl:80/api/npm/npm-local/:username=damien.dube
      //artifacts.guavus.mtl:80/api/npm/npm-local/:email=Damien.Dube@guavus.com
      //artifacts.guavus.mtl:80/api/npm/npm-local/:always-auth=true
      ```

## Dependency fetching

Once inside the `ui-kit-starter-app` folder:

```bash
npm install
```

_**Note 1**_: Every time a dependency is added or `package.json` is modified, a `npm upgrade` needs to be run. And commit the new `package-lock.json` file.

_**Note 2**_: If you see an error with `Merge Conflict`. Manually delete npm's cache folder content.

_**Note 3**_: If you are still getting problems when trying to run, it is possible you still have some legacy code. A full clean is needed.

### Manually delete npm's cache folder content

```bash
npm cache clean --force
```

#### A full clean

```bash
rm -rf ./node_modules && rm package-lock.json && npm cache clean && npm install
```

## Code scaffolding

Run `ng generate component component-name --app=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module|json`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://www.npmjs.com/package/@angular/cli).

## Project Configurations

Project Level Configurations are available in directory `$PROJECT_HOME/apps/app/src/config/` .There are multiple files which are used for different purposes.

1. `config.json` : Application level configurations
    ``` javascript
   {
     // Application name  displayed in Header
    "appName": "Seed Application",
    //  Application large logo displayed at login page
    "logo": "assets/images/guavusLogoLarge.png",
    //  Application small logo displayed at Header
    "short_logo": "assets/images/guavus_logo.svg",
    //  Application copyright message displayed at Footer
    "copyright": "© $year Guavus",
    // URL MAP used for doing online calls
    "urls": {
      // auth server url
      "auth": "/oauth/1",
      // host server url
      "base": "/",
      // user-management server url
      "um": "/api/v1"
    },
    // context root added to above URLS
    "contextRoot": "/",
    // Application Default Timezone displayed at Footer
    "timezone": "GMT",
    // Help files URL
    "helpURL": "help/index.html",
    // Authorization Type
    "authorization": "auth",
    // Favicon
    "favicon": "default"
     }
    ```

1. `about.json`: About application view configurations
    ``` javascript
    {
    "copyRightLabel": "©2007-2018 Guavus, All rights reserved.",
    "licenceLabel": "Guavus Inc",
    "supportLabel": "support@guavus.com",
    "companyLogPath": "assets/images/guavus_logo.svg",
    "disclaimerText": "WARNING! This computer system and network is PRIVATE and PROPRIETARY and may only be accessed by authorized users. Unauthorized use of this computer system or network is strictly prohibited and may be subject to criminal prosecution, employee discipline up to and including discharge, or the termination of vendor/service contracts. The owner, or its agents, may monitor any activity or communication on the computer system or network. The owner, or its agents, may retrieve any information stored within the computer system or network. By accessing and using this computer system or network, you are consenting to such monitoring and information retrieval for law enforcement and other purposes. Users should have no expectation of privacy as to any communication on or information stored within the computer system or network, including information stored locally or remotely on a hard drive or other media in use with this computer system or network."
    }
    ```

1. `auth_info.json`: oAuth configurations
    ```javascript
    {
      "client_id": "user_management",
      "client_secret": "gvs_um",
      "grant_type": "password"
    }
    ```
1. `login_config.json`: Login page configurations
    ```javascript
    {
      "disclaimerText": "WARNING! This computer system and network is PRIVATE and PROPRIETARY and may only be accessed by authorized users. Unauthorized use of this computer system or network is strictly prohibited and may be subject to criminal prosecution, employee discipline up to and including discharge, or the termination of vendor/service contracts. The owner, or its agents, may monitor any activity or communication on the computer system or network. The owner, or its agents, may retrieve any information stored within the computer system or network. By accessing and using this computer system or network, you are consenting to such monitoring and information retrieval for law enforcement and other purposes. Users should have no expectation of privacy as to any communication on or information stored within the computer system or network, including information stored locally or remotely on a hard drive or other media in use with this computer system or network.",
      "rightsText": " ©2007-2018 Guavus. All rights reserved.<br/>Best viewed at minimum 1280 x 1024 resolution.",
      "logo": "assets/images/guavusLogoLarge.png",
      "loginSuccessRoute": "/app"
    }
    ```
1. `app_switcher.json`: App switcher configurations
    ```javascript

      //here `apps` is [[Object,Object]]

      {
        "currentApp": "Seed Application",
        "apps":
          [
            [
              {
                "id": 1,
                "image": "assets/images/seed_app.svg",
                "description": "Seed Application",
                "url": "/",
                "tooltip": "Seed Application",
                "isenable": "false",
                "name": "seed",
                "isVisible":true
              },
              {
                "id": 2,
                "image": "assets/images/um_app.svg",
                "description": "User Management",
                "url": "/um/",
                "tooltip": "User Management",
                "name": "UM",
                "isVisible": true
              }
            ]
          ]
      }
    ```
   for more details about App switcher check [here](https://github.com/Guavus/ui-kit-docs/blob/master/features/app-switcher.md)

## Run Application in offline/online mode

We can run application in offline/online mode as per below steps. 

1. Move to file `$PROJECT_HOME/libs/common/src/app-config.ts`
1. To run Application **offline mode**, update flag `ISOFFLINE` value to `true`
1. To run Application **online mode**, update flag `ISOFFLINE` value to `false` and set [Application level configurations](#project-configurations)

Note: In offline mode all API calls will be handled by `OfflineDataGeneratorService`.

## Development server

Run `npm start` for a dev server of primary application. Navigate to `http://localhost:1986/`. The app will automatically reload if you change any of the source files.

For all other application you can run `ng serve --app=<app-name> --port=<app-port>` and Navigate to `http://localhost:<app-port>/`. The app will automatically reload if you change any of the source files.

## Development server with AoT

Run `npm run start:aot` for a dev server of primary application. Navigate to `http://localhost:1986/`. The app will automatically reload if you change any of the source files.

For all other application you can run `ng serve --aot --app=<app-name> --port=<app-port>` and Navigate to `http://localhost:<app-port>/`. The app will automatically reload if you change any of the source files.

## Production build test server

Run `npm run start:prod` for a server of primary application with prod artifacts. Navigate to `http://localhost:8843/<project-name>/`. The app will *not* automatically reload if you change any of the source files.

> In above url *project-name* is defined as baseHref value in `$PROJECT_HOME/angular-cli.json` and it can be updated as per requirement

For all other application you need to create a `bs-config.js` file replica and update the file locations and port infirmation. Add a new script in package.json. In future when we support multiple application OOTB then we will automate this changes

## Production Build

Run `npm run build` to build the project. The build artifacts will be stored in the `$PROJECT_HOME/dist/apps/<app-name>` directory. Use the `npm run build:prod`  for a production build. Prod will be AoT by default

## Production Build with AoT

 Use the `npm run build:prod`  for a production build.The build artifacts will be stored in the `$PROJECT_HOME/dist/apps/<app-name>` directory.

## Lint

Use `npm run lint` to check linting errors in project. Linting rules are defined in file `$PROJECT_HOME/tslint.json`. [TsLint](https://palantir.github.io/tslint/) and [SonarTs](https://github.com/SonarSource/SonarTS) are used for Linting.

## Unit Tests

Run  `npm test` command for to execute the unit tests via [Karma](https://karma-runner.github.io).

**For debug**: Run this for debug, this will run the unit-tests with auto-watch mode

```bash
npm run test:watch
```

## Coverage Report

To check code coverage report for unit test cases run  `npm run coverage`

## e2e tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

**For e2e tests results**: Run `npm run e2e:result`.

## Update Changelog

 1. The changelog can be updated using `npm run changelog` if below conditions are meet
    1. Root package.json has version higher than last release entry in  `CHANGELOG.md`
    1. Commit messages adhere to conventional-changelog [commit guidlines](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)
    1. There is new commits to be added in changelog of type `feat`, `fix` or `perf`
    1. There is no unreleased section in  `CHANGELOG.md`
 1. To generate a unreleased changelog run `npm run changelog -- -u`
 1. To recreate a changelog file run  `npm run changelog -- -r 0`

## Creating a Docker Image

### Prerequesites

1. Install [Docker](https://www.docker.com/get-started) on your machine.

1. Add `artifacts.ggn.in.guavus.com:4245` in Docker Daemon registry.

Tested with Docker version ```18.03.1-ce-mac65```
   > In **Guavus** , For Docker Images publish **Artifactory Server**  is artifacts.ggn.in.guavus.com:4245  and it should be updated in below steps if it is changed. 

### Steps

1. To make docker build, go to project folder and run:

    ```bash
     npm run docker:build
    ```

1. To test the image, run the command below to create a container

    ```bash
    npm run docker:run
    ```
   **Note**:
     > currently, we are running the container on ```port 4000```.
     >If you have set baseHref (in `$PROJECT_HOME/angular-cli.json` file )to Non root location like "/{projectname}/"  in that case we have enabled middleware proxy on port 8888 to redirect all request coming on host:8888/{projectname} to localhost:4000.
    >You might get an error that the port is already running, in that case, execute the following command to stop the running container:
  
     ```bash
     docker stop <running-container-name>
     ```
   > or check if some other service is running on that port.

1. Before publishing to **sample artifactory**  we may need to login
    ```bash
   docker login   artifacts.ggn.in.guavus.com:4245
    ```
   > This **sample Artifactory**can be updated as per requirements

1. Publishing to guavus gurgaon artifactory
    ```bash
   npm run docker:tag
   npm run docker:push
    ```

## Some More

> * [pre-commit](https://www.npmjs.com/package/pre-commit) hook is added in `$PROJECT_HOME/package.json` and it can be found in `pre-commit` tag. To disable this feature remove it from `$PROJECT_HOME/package.json`.
> * you can create multiple applications and libraries in the same CLI workspace. Read original Nx documnetation [nrwl](http://nrwl.io/nx).
> * In details [Project features](https://github.com/Guavus/ui-kit-docs#features-customizations)
