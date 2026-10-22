pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/mayur-rane024/Tomato.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'ls -la'
                sh 'ls backend frontend'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'test -f backend/package.json && test -f frontend/package.json'
            }
        }
    }
}
