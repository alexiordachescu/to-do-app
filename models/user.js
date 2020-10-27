"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.todoList);
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
