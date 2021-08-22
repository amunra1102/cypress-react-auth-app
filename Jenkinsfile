pipeline{
  agent{
    docker {
      image "cypress/base:12"
      args "-u root:root"
    }
  }
  stages{
    stage("Download the dependencies in server"){
    steps{
      sh "npm install"
    }
    }
    stage("Download the dependencies in client"){
      steps{
        sh "cd client && npm install && cd .."
      }
    }
    stage("Build and test"){
      steps{
        sh "npm run build:and:test"
      }
    }
  }
}
