# Run app locally by execute following commands
open terminal and Go into HELLO-WORLD directory using 
1) cd HELLO-WORLD

## Install npm packages
2) npm install

## RUN app
3) node app.js

----------------------

# Run app using docker

## Build docker image
docker build -t mzunair/node-rest-api .

## Run Docker image

docker run -p 8080:8080 mzunair/node-rest-api:latest -d

## Get container id
docker ps

## Stop running container
docker stop "CONTAINER ID"

#e-g
docker stop 56987377c7cc

## Check Logs
docker logs "CONTAINER ID"

#e-g
docker logs 56987377c7cc

# Check the REST API
curl -i -k https://localhost:8080/hello
## OR
open https://localhost:8080/hello in browser


----

# Kubernetes Deployment

kubectl apply -f node-rest-api.yaml

-----

# Added CICD configurations.
