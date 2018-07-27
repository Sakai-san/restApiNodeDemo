# Tutorial on how does GraphQL work

## Setup environment
  * install nodejs in your through [nvm](https://github.com/creationix/nvm)

## Setup project
  * > mkdir graphQLTuto
  * > npm init --y
  * > npm i express sequelize mysql2 --save
  * > npm i nodemon sequelize-cli --saveDev
  * add this two line under `scripts` in `package.json`
        `"start": "./node_modules/nodemon/bin/nodemon.js app.js,"`
        `"sequelize-skeleton": "./node_modules/sequelize-cli/lib/sequelize init:models && ./node_modules/sequelize-cli/lib/sequelize init:config"`        
  * create skeleton : >  "./node_modules/sequelize-cli/lib/sequelize init:models && init:config" init:models init:config
  * create two directories : > mkdir -p app/routes  

## Remark
  Goal of this tutorial is to introduce in a few steps how does graphql work.
  On that purpose we did not add a security layer. In a prod env you should use the bodyParser module on
  that purpose.