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
        type: DataTypes.INTEGER,
      },
      detailsId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'DetailPages',
          key: 'detailsId',
        },
        onDelete: 'CASCADE',
      },
      itemId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'ItemPages',
          key: 'itemId',
        },
        onDelete: 'CASCADE',
      },
      coordinateX: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      coordinateY: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
      modelName: 'WritePacks',
    }
  );
  return WritePacks;
};
