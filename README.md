# resync-interview-submission
### Requirements
- Make sure you have docker, MySQL and NodeJS installed 

### Project setup 
```shell
$ cd /path/to/resync-interview-submission

$ npm install 

$ docker-compose up


####  you should see the following logs after init ###

app_1    | [nodemon] 2.0.3
app_1    | [nodemon] to restart at any time, enter `rs`
app_1    | [nodemon] watching path(s): *.*
app_1    | [nodemon] watching extensions: js,mjs,json
app_1    | [nodemon] starting `node ./bin/www`
app_1    | Executing (default): SELECT 1+1 AS result
app_1    | MySQL connection has been established successfully.

### open another terminal session ###

$ curl localhost:3000

{"health_check":"good"}
```
#### Database migation and seeding
- Go to `resync-interview-submission/config/config.json` change `development.host` to `localhost`
```shell
$ npm run sequelize db:migrate

$ npm run sequelize db:seed:all
```
- Go back to `resync-interview-submission/config/config.json` change back `development.host` to `mysql`

### Sample login credentials
```shell
"email":"jeffrey@lim.com",

"password":"qweasd123!"
```

### Import postman
```shell
https://www.getpostman.com/collections/53233a066a4e8d728b06
```


