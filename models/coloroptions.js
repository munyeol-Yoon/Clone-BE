'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ColorOptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.ItemPages, {
        targetKey: 'itemId',
        foreignKey: 'itemId',
      });
    }
  }
  ColorOptions.init(
    {
      colorOptionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      itemId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'ItemPages',
          key: 'itemId',
        },
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'ColorOptions',
    }
  );
  return ColorOptions;
};
