# Tutorial on how to create a rest api with nodejs, sequelize

## Setup environment

  * install a mysql server, for example via [xampp](https://www.apachefriends.org/index.html)
  * install nodejs in through [nvm](https://github.com/creationix/nvm)

## Setup project
  * > mkdir restApiNodeDemo
  * > npm init --y
  * > npm i express sequelize mysql2 --save
  * > npm i nodemon sequelize-cli --save-dev
  * add this two line under `scripts` in `package.json`
        `"start": "./node_modules/nodemon/bin/nodemon.js app.js,"`
        `"sequelize-skeleton": "./node_modules/sequelize-cli/lib/sequelize init:models && ./node_modules/sequelize-cli/lib/sequelize init:config"`        
  * create skeleton : >  "./node_modules/sequelize-cli/lib/sequelize init:models && init:config" init:models init:config
  * create two directories : > mkdir -p app/routes  

## Remark
  Goal of this tutorial is to introduce in a few steps how does graphql work.

  that purpose.
  * in this demo we are using a so called ORM for avoid mixing up JS and SQL and we can create table not by having a separate sql script. Indeed we do not want to have statement like this :
    connection.query(" SELECT * from Author WHERE name=?", 'David', (error, result)=> {

    });