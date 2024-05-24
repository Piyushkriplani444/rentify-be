const exporess = require("express");

const router = exporess.Router();

const userControoler = require("../controller/userController");

router.post("/register", userControoler.register);

// router.post("./login");

// router.post("./logout");

module.exports = router;
