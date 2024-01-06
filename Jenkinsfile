pipeline {
    agent none

    stage('Clean Workspace'){
        cleanWs()
    }

    stage("Main build") {

        stage('Checkout SCM') {
            checkout([$class: 'GitSCM', branches: [[name: 'main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/shinchan305/AmCart.git']]])
        }
        
        // Permorming Install and Lint
        stage('Install') {
            sh label:
            'Running npm install',
            script: '''
            npm install
            '''
        }
        stage ('Build') {
            sh label:
            'Running npm run build',
            script: '''
            npm run build
            '''
        }
    }
}