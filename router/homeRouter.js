const express = require("express");
const { getHome } = require("../controller/homeController");
const router = express.Router();

// Home Page
router.get("/", getHome);

module.exports = router;
