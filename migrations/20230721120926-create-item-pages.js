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
        allowNull: false,
        type: Sequelize.STRING,
      },
      benefit: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imgUrl: {
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
