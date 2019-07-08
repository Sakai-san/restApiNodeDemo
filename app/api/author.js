module.exports = (app, db) => {
  app.get("/author/:id", (req, res) =>
    db.author.findByPk(req.params.id).then(result => res.json(result))
  );
};
