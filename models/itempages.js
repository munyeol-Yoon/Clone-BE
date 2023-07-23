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

      this.hasMany(models.ColorOptions, {
        sourceKey: 'itemId',
        foreignKey: 'itemId',
      });

      this.hasMany(models.SizeOptions, {
        sourceKey: 'itemId',
        foreignKey: 'itemId',
      });

      this.hasMany(models.ItemImgList, {
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
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'userId',
        },
        onDelete: 'CASCADE',
      },
      brandName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      itemName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      rating: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      discount: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      discountPrice: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      benefit: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imgUrl: {
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
      modelName: 'ItemPages',
    }
  );
  return ItemPages;
};
