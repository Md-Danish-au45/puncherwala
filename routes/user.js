const express = require("express");
const { getHome } = require("../controllers/home");
const { getSignup, postSignup } = require("../controllers/signup");
const { getLogin, loginController } = require("../controllers/user");
const router = express.Router();

router.get("/login",getLogin)
router.get("/signup", getSignup)
router.post("/:signup",postSignup)
router.post("/:login",loginController)
router.get("/home", getHome)

module.exports = router