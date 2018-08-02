const express = require("express");
const faker = require("faker");
const lodash = require("lodash");
const db = require("./models");
const apiPost = require("./app/api/post");
const apiAuthor = require("./app/api/author");

const app = express();

app.use(express.static("app/public"));

apiPost(app, db);
apiAuthor(app, db);

db.sequelize.sync().then( () => {
  db.author.bulkCreate(
    lodash.times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }))
  );

  db.post.bulkCreate(
    lodash.times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      authorId: lodash.random(1, 10)
    }))
  );
  app.listen(8080, () => 
    console.log("App listening on port 3000!")
  );
});

/*
restapi 
https://www.youtube.com/watch?v=oe0rkp14osg
https://www.youtube.com/watch?v=De-WBBqUMSo


graphql
https://www.youtube.com/watch?v=hqk30IVeYak
https://www.youtube.com/watch?v=xBAJ5nQkeiM

*/