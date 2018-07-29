const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const graphqlDemo = require('./lib');
const routes = require("./app/routes/apiRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text() );
app.use(bodyParser.json({type: 'application/vnf.api+json'}));

app.use(express.static("app/public"));

routes(app, db);

db.sequelize.sync().then( () => {
  app.listen(8080, () => console.log("App listening on port 3000!") );
});


const grades  = [ 11, 12, 14, 14, 18, 20];

console.log(  graphqlDemo.bestScore(grades) ) ;


/*

INSERT INTO `author`(`firstName`, `lastName`, `birthDate`) VALUES ("Thomas","rubattel", "1979-04-22");
INSERT INTO `post`(`title`, `content`,  `author_id`) VALUES ("premier post","on va traiter des types en js", (select id from author where firstName = 'Thomas' ));

restapi 
https://www.youtube.com/watch?v=oe0rkp14osg
https://www.youtube.com/watch?v=De-WBBqUMSo


graphql
https://www.youtube.com/watch?v=hqk30IVeYak
https://www.youtube.com/watch?v=xBAJ5nQkeiM
*/