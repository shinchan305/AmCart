pipeline {
    agent any

    options {
        copyArtifactPermission('amcart-front-cd');
    }   

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
        stage ('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/am-cart/*',
                allowEmptyArchive: true,
                fingerprint: true,
                onlyIfSuccessful: true
            }
        }

        stage ('Deploy to S3') {
            steps {
                build propagate: false, job: 'amcart-frontend-cd'
            }
        }
    }
}