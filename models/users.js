"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1. Users 모델에서 (이곳이 Users 모델이니까)
      this.hasMany(models.DetailScraps, {
        // 2. detailscraps 모델에게 hasMany 1:N 관계 설정을 합니다.
        foreignKey: "userId", // 3. detailscraps 모델의 userId 컬럼
        sourceKey: "userId", // 4. Users 모델의 userId 컬럼을
      });
      this.hasMany(models.ItemScraps, {
        foreignKey: "userId",
        sourceKey: "userId",
      });
      this.hasMany(models.DetailPages, {
        foreignKey: "userId",
        sourceKey: "userId",
      });
      this.hasMany(models.ItemPages, {
        foreignKey: "userId",
        sourceKey: "userId",
      });
    }
  }
  Users.init(
    {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      nickname: {
        type: DataTypes.STRING,
      },
      scrap: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
