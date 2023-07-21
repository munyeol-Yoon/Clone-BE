'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.WritePacks, {
        sourceKey: 'itemId',
        foreignKey: 'itemId',
      });

      this.hasMany(models.ItemScraps, {
        sourceKey: 'itemId',
        foreignKey: 'itemId',
      });

      this.belongsTo(models.Users, {
        targetKey: 'userId',
        foreignKey: 'userId',
      });
    }
  }
  ItemPages.init(
    {
      itemId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'userId',
        },
        onDelete: 'CASCADE',
      },
      itemName: {
        allowNull: false,
        type: sequelize.STRING,
      },
      imgUrl: {
        allowNull: false,
        type: sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: sequelize.STRING,
      },
      scrap: {
        type: sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        defaultValue: sequelize.NOW,
        type: sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: sequelize.NOW,
        type: sequelize.DATE,
      },
    },
    {
      sequelize,
      modelName: 'ItemPages',
    }
  );
  return ItemPages;
};
