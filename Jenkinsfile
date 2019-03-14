@Library('jenkins_lib')_

pipeline {
  //agent {label 'slave'}
  agent {label 'nebula-slave03'}

    environment {
    // Define global environment variables in this
    WORKSPACE = pwd()
    supersetInventoryFilePath = 'superset-installer/etc/reflex-provisioner/inventory/templates/group_vars/global/all/raf/superset.yml'
    jenkinsInventoryFilePath = '${WORKSPACE}/${supersetInventoryFilePath}'
    testWithDatabase = 'py36-postgres'
    ARTIFACT_SRC1 = '.'
    ARTIFACT_DEST1 = 'ggn-dev-rpms/raf'
    SLACK_CHANNEL = 'jenkins-ui-alerts'
    CHECKSTYLE_FILE = 'target/checkstyle-result.xml'
    UNIT_RESULT = 'target/surefire-reports/*.xml'
    COBERTURA_REPORT = 'coverage.xml'
    ALLURE_REPORT = 'allure-report/'
    HTML_REPORT = 'index.html'
  }
  stages {

    stage("Define Release version"){
      steps {
        script {
          versionDefine()
        }
      }
    }

    stage("Build"){
    steps{
    script{
         buildsteps = load 'raf_ins.groovy'
    }}}

  }

  post {
    always {
      reports_alerts(env.CHECKSTYLE_FILE, env.UNIT_RESULT, env.COBERTURA_REPORT, env.ALLURE_REPORT, env.HTML_REPORT)
      slackalert('jenkins-ui-alerts')
    }
  }
}