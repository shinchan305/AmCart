pipeline {
    agent any

    options {
        copyArtifactPermission('amcart-front-cd/');
    }   

    stages {
        stage('Install') {
            steps {
                bat "npm install"
            }
        }
        
        stage ('Build') {
            steps {
                bat "npm run build"
            }
        }

        stage("Run tests") {
            steps {
                bat "npm run test:ci"
            }
        }

        stage ('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/am-cart/**',
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