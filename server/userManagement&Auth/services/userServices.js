const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { Users, Groups } = require("../../models/index");
const { Op } = Sequelize;

module.exports = class UserService {
  static async registerUser(req) {
    try {
      const { firstName, lastName, email, phoneNumber, role, password } =
        req.body;

      const groupFound = await Groups.findOne({
        where: {
          group_name: {
            [Op.iLike]: `${role}`,
          },
        },
      });

      const foundUser = await Users.findOne({
        where: {
          email: {
            [Op.iLike]: `%${email}`,
          },
        },
      });

      if (!foundUser) {
        const hashedPassword = await bcrypt.hash(password, 12);
        const { group_id } = groupFound.dataValues;
        await Users.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          phoneNumber,
          group_id,
        });
        return true;
      }
      return false;

      //   const thased =
    } catch (error) {
      throw error;
    }
  }
};
