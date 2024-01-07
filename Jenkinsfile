pipeline {
    agent anys

    stages {
        stage('Install') {
            steps {
                // echo 'Running npm install'
                bat "npm install"
            }
        }
        
        stage ('Build') {
            steps {
                // echo 'Running npm run build',
                bat "npm run build"
            }
        }
    }
}