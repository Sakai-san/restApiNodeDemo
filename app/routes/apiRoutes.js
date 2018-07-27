module.exports = (app, db) => {
  app.get( "/posts", (req, res) =>
    db.post.findAll().then( (result) => res.json(result) )
  );

  app.all( "/post/:id", (req, res) => {

    const post = {
      updateDate: Date.now(),
      content: req.post && req.post.content || ''
    };

    if(req.method === 'PUT'){
      res.json( {title: "ok"} );
    }
    else if (req.method === 'DELETE'){
      res.json( {title: "ok"} );
    }
    // get
    else {
      res.json( {title: "ok"} );
    }
  });

  app.delete( "/post", (req, res) => {
    const post = {
      updatedDate: Date.now(),
      content: req.post && req.post.content || ''
    };

    if(req.method === 'PUT'){
      return {title: "bonjour"};
    }
    else if (req.method === 'DELETE'){
      res.json( {title: "ok"} );
    }
    // get
    else {
      const id = req.params.id;
      res.json( {title: "ok"} );
    }
  });  
}