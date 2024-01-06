pipeline {
    agent none

    stages {
        steps {
            stage('Install') {
                echo 'Running npm install',
                bat "npm install"
            }
        stage ('Build') {
                echo 'Running npm run build',
                bat "npm run build"
            }
        }
    }
}