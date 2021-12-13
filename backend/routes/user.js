const express = require("express");
const router = express.Router();

// Controller import
const userCtrl = require("../controllers/user");

// Routes for user
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
