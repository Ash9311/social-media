const express = require("express");
const req = require("express/lib/request");
const app = express();

require("dotenv").config({path:"backend/config/config.env"})

module.exports = app;