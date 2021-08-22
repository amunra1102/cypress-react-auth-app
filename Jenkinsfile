pipeline{
  agent{
    label "cypress test"
  }
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
