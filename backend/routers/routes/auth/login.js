const express = require("express");
const loginRouter = express.Router();

// controller
const performLogin = require("../../controllers/auth/login");

loginRouter.post("/login", performLogin);

module.exports = loginRouter;
