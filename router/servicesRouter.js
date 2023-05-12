const express = require("express");
const { getServices } = require("../controller/servicesController");
const router = express.Router();

// Services Page
router.get("/", getServices);

module.exports = router;
