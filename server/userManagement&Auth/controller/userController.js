const UserService = require("../services/userServices");

const {
  badRequestResponse,
  okResponse,
} = require("../../helper/customMessage");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, type, password } =
      req.body;

    const result = await UserService.registerUser(req, res);
    switch (result) {
      case true:
        return okResponse(req, res, "User register successfully");

      case false:
        return badRequestResponse(req, res, "Already Registered User");
      default:
        return badRequestResponse(req, res, "Something went wrong");
    }
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
};
