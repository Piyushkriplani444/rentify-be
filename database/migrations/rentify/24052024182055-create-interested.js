module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("interested", {
      interested_id: {
        type: Sequelize.INTEGER,
        autoIncreament: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },

      property_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "property",
          key: "property_id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("interested");
  },
};
