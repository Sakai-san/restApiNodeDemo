module.exports = (app, db) => {
  app.get( "/posts", (req, res) =>
    db.post.findAll().then( (result) => res.json(result) )
  );

  app.post("/post", (req, res) => {
    db.post.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  });

  app.all( "/post/:id", (req, res) => {

    if(req.method === 'PUT'){
      db.post.update({
        title: req.body.title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    }
    else if (req.method === 'DELETE'){
      db.post.delete({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    }
    // get
    else {
      db.post.findById(req.params.id).then( (result) => res.json(result) )
    }
  });

}