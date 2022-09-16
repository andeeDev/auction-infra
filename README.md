## Description

The service is created to proxy requests to the services
>   ❗⚠️  **Should be started after the user-service.**

## Set up the project
Created env config file like below
```dotenv
NODE_ENV=dev
RABBIT_MQ_USER=andee
RABBIT_MQ_PASSWORD=guest
RABBIT_MQ_HOST=rabbitmq
RABBIT_MQ_VHOST=notifications
JWT_SECRET=secretKey
JWT_EXP_H=60m
```
## Running the project

To run the project just run the docker command. Note that this service should be run after the user service.

```bash
$ docker-compose up -d
```