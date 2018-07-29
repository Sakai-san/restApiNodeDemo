
const Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Post = sequelize.define('post', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: Sequelize.STRING,
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  },
  {
    freezeTableName: true
  }
);


const Author = sequelize.define('author', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    birthDate: Sequelize.DATE
  },
  {
    freezeTableName: true
  }
);

Post.belongsTo(Author);
Author.hasMany(Post);

sequelize.sync();
