'use strict';
module.exports = (sequelize, DataTypes) => {
  var card = sequelize.define('card', {
    cvv: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    pass: DataTypes.STRING,
    auto_reload: DataTypes.INTEGER,
    passenger_type: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  card.associate = function (models) {
    models.card.belongsTo(models.user);
    models.card.hasMany(models.activity);
  };
  return card;
};
