module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      authorId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.author,
          key: 'id'
        }
      }
  },
  {
    freezeTableName: true
  });

  return Post;
}