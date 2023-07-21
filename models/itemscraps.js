'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemScraps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        targetKey: 'userId',
        foreignKey: 'userId',
      });

      this.belongsTo(models.ItemPages, {
        targetKey: 'itemId',
        foreignKey: 'itemId',
      });
    }
  }
  ItemScraps.init(
    {
      itemscrapId: {
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
      itemId: {
        allowNull: false,
        type: sequelize.INTEGER,
        references: {
          model: 'ItemPages',
          key: 'itemId',
        },
        onDelete: 'CASCADE',
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
      modelName: 'ItemScraps',
    }
  );
  return ItemScraps;
};
