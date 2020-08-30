pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
       environment {
         REACT_APP_PEXEL_API="563492ad6f91700001000001155d7b75f5424ea694b81ce9f867dddf"
         REACT_APP_API_URL="https://api-refactored.curriki.org/api"
         REACT_APP_RESOURCE_URL="https://api-refactored.curriki.org"
         REACT_APP_GOOGLE_CAPTCHA="6LdImbgZAAAAAN4s1eEi53-ul7uJfLONrFuBcKS0"
         REACT_APP_HUBSPOT="7874555"
         REACT_APP_API_VERSION="v1"
       }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}
