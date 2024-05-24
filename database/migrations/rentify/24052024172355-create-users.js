module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "groups",
          key: "group_id",
        },
      },
      firstName: {
        type: Sequelize.STRING,
        isAlpha: true,
        notEmpty: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      login_token: Sequelize.TEXT,
      loginAT: Sequelize.DATE,

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
    await queryInterface.addIndex("users", ["email"], {
      indicesType: "UNIQUE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
