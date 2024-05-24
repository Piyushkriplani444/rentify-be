module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("groups", {
      group_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      group_name: {
        type: Sequelize.STRING,
        isAlpha: true,
        notEmpty: true,
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

    await queryInterface.addIndex("groups", ["group_name"], {
      indicesType: "UNIQUE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("groups");
  },
};
