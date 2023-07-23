'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemImgList extends Model {
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
  ItemImgList.init(
    {
      itemImgListId: {
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
      itemImg: {
        allowNull: false,
        type: DataTypes.STRING(1024),
      },
    },
    {
      sequelize,
      modelName: 'ItemImgList',
    }
  );
  return ItemImgList;
};
