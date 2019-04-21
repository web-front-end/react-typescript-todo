pipeline{
    agent{
        docker{
             image 'node:8.16.0-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages{
        stage('Initialize'){
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage("Build"){
            steps{
                echo "========executing A========"
                sh 'npm install'
            }
        }
    }
}