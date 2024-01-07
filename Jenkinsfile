pipeline {
    agent any

    options {
        copyArtifactPermission('amcart-front-cd/');
    }   

    stages {
        stage('Clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Install') {
            steps {
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
                script {
                    if ("${BRANCH_NAME}" == 'main') {
                        build propagate: false, job: 'amcart-frontend-cd/main'
                    }
                    if ("${BRANCH_NAME}" == 'test') {
                        build propagate: false, job: 'amcart-frontend-cd/test'
                    }
                }
            }
        }
    }
}