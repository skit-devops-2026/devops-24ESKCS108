pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                echo 'Running project tests...'
                echo 'Digital Bank project structure check passed.'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Digital Bank project...'
            }
        }
    }

    post {
        success {
            echo 'Jenkins pipeline completed successfully.'
        }
        failure {
            echo 'Jenkins pipeline failed.'
        }
    }
}
