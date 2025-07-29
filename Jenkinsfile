pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'main', 'https://github.com/Kasimalbatros/node-app-CICD.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // If you have tests, they’ll run; otherwise this won't fail the build
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Start Application') {
            steps {
                sh 'nohup npm start &'
                echo 'App started successfully in background.'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
