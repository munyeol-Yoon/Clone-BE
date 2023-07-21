'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WritePacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.DetailPages, {
        targetkey: 'detailsId',
        foreignKey: 'detailsId',
      });

      this.belongsTo(models.ItemPages, {
        targetkey: 'itemId',
        foreignKey: 'itemId',
      });
    }
  }
  WritePacks.init(
    {
      writeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      detailsId: {
        allowNull: false,
        type: sequelize.INTEGER,
        references: {
          models: 'DetailPages',
          key: 'detailsId',
        },
        onDelete: 'CASCADE',
      },
      itemId: {
        allowNull: false,
        type: sequelize.INTEGER,
        references: {
          models: 'ItemPages',
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
      modelName: 'WritePacks',
    }
  );
  return WritePacks;
};
