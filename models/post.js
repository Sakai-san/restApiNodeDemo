module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content : DataTypes.TEXT,
      createdAt : DataTypes.DATE,
      updatedAt : DataTypes.DATE,
      author_id: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.author,
          key: 'id'
        }
      }
  });

  return Post;
}