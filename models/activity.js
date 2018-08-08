'use strict';
module.exports = (sequelize, DataTypes) => {
  var activity = sequelize.define('activity', {
    cardId: DataTypes.INTEGER,
    route: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  activity.associate = function(models) {
    // associations can be defined here
    models.activity.belongsTo(models.card)
  };
  return activity;
};
