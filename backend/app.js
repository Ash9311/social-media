const express = require("express");
const req = require("express/lib/request");
const app = express();

if(process.env.NODE_ENV!=="production"){
require("dotenv").config({path:"backend/config/config.env"})
}
module.exports = app;