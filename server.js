const express = require("express");
const app = express();
const db = require("./models");
const graphqlDemo = require('./lib');
const routes = require("./app/routes/apiRoutes");

routes(app, db);

db.sequelize.sync().then( () => {
  app.listen(8080, () => console.log("App listening on port 3000!") );
});


const grades  = [ 11, 12, 14, 14, 18, 20];

console.log(  graphqlDemo.bestScore(grades) ) ;


/*

INSERT INTO `authors`(`firstName`, `lastName`, `birthDate`) VALUES ("Thomas","rubattel", "1979-04-22");
INSERT INTO `posts`(`title`, `content`, `createdAt`, `updatedAt`, `author_id`) VALUES ("premier post","on va traiter des types en js",now(),now(), (select id from authors where firstName = 'Thomas' ));

*/