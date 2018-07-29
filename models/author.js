module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthDate: DataTypes.DATE
  });

  return Author;
}