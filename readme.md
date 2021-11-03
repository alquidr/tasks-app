# Truenorth Challenge

_This project contains 3 endpoints to perform the goals._
```sh
Generate the tasks:
POST: http://localhost:8080/v1/tasks/:quantity

Get all the tasks:
GET: http://localhost:8080/v1/tasks/

Mark a task done, given a taskId :
PUT: http://localhost:8080/v1/tasks/:taskId
```

# Running the project
- add the proper values in the .env file
- Install all packages with the next command: 
```sh
npm i
```
- Run the docker image with the next commands: 
 ```sh
docker build . -t <your username>/task-app
docker run -p 49160:8080 -d <your username>/task-app
```
