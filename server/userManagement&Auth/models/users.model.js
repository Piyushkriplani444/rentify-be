const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.belongsTo(models.Groups, {
        foreignKey: "group_id",
        as: "groups",
      });
    }
  }
  Users.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      group_id: DataTypes.INTEGER,
      firstName: {
        type: DataTypes.STRING,
        isAlpha: true,
        notEmpty: true,
      },
      lastName: {
        type: DataTypes.STRING,
        isAlpha: true,
        notEmpty: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
      login_token: DataTypes.TEXT,
      loginAT: DataTypes.DATE,

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW"),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW"),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "Users",
      timestamps: true,
      indexes: [
        {
          unique: false,
          fields: ["email"],
        },
      ],
    }
  );
  return Users;
};
