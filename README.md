# resync-interview-submission
### Requirements
- Make sure you have docker, MySQL and NodeJS installed 

### Project setup 
```shell
$ cd /path/to/resync-interview-submission

$ npm install 

$ docker-compose up
```
#### Database migation and seeding
- Go to `resync-interview-submission/config/config.json` change `host` to `localhost`
```shell
$ npm run sequelize db:migrate

$ npm run sequelize db:seed:all
```
- Go back to `resync-interview-submission/config/config.json` change `host` to `mysql`

### Sample login credentials
```shell
"email":"jeffrey@lim.com",

"password":"qweasd123!"
```

### Import postman
```shell
https://www.getpostman.com/collections/53233a066a4e8d728b06
```


