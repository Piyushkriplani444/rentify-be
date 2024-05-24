module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("property", {
      property_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
      },
      place: {
        type: Sequelize.TEXT,
      },
      area: {
        type: Sequelize.TEXT,
      },
      bedrooms: {
        type: Sequelize.INTEGER,
      },
      bathroom: {
        type: Sequelize.INTEGER,
      },
      hospitals: {
        type: Sequelize.INTEGER,
      },
      colleges: {
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
        allowNull: false,
      },
    });

    // await queryInterface.addIndex('property', [''])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("property");
  },
};
