"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    static associate(models) {
      tag.belongsToMany(models.todoItem, {
        through: "itemTags",
        foreignKey: "tagId",
      });
    }
  }
  tag.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return tag;
};
