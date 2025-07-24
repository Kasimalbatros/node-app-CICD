How to Restart our Node Application

cd node-app-CICD , 
node server.js

Our App will run on 

http://localhost:8000

Inside Below Path Dockerfile is Present...
ubuntu@ip-10-0-0-4:~/projects/node-app-CICD/public$


mv public/Dockerfile . (this Moves Dockerfile to Current directory)

sudo lsof -i :8000  (to check what listens inside PORT:8000)

sudo kill -9 <Process-id>   (it Stops whatever is running)


Webhooks is used for CICD(Continous Integration & COntinous Deployment)  ---> No Manual Intervention Required (Fully Automatic, It Somethings Committed Inside Github then Jenkins Starts Auto Build now process Process)

for CICD(Continous Integration & COntinous Delivery)  ---> 1 button Need to be clicked like Build Now then Things Happens



sudo usermod -aG docker $USER && newgrp docker     Adds the current user ($USER) to the docker group

sudo usermod -aG docker jenkins     Adds the jenkins user to the docker group

