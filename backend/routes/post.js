const express = require("express");
const { createPost } = require("../controllers/post");
const router = express.Router();
let mongoose = require("mongoose");
router.route("/post/upload").post(createPost);

module.exports=router;