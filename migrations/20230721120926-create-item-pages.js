'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemPages', {
      itemId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'userId',
        },
        onDelete: 'CASCADE',
      },
      brandName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      itemName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rating: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      discount: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      discountPrice: {
        //TODO: price 와 discount 에 의해 자동으로 입력하는 방법은 없을까?
        allowNull: false,
        type: Sequelize.STRING,
      },
      benefit: {
        //TODO: discountPrice * 0.001 에 의해 자동으로 입력하는 방법은 없을까?
        allowNull: false,
        type: Sequelize.STRING,
      },
      lowPrice: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      highPirce: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemPages');
  },
};
