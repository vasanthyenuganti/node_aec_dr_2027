const express = require("express");
const userCtrl = require("../controllers/userController");
const route = express.Router();


route.get("/roll/:roll", userCtrl.getUserDetailsByRoll);

module.exports = route
