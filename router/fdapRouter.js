const express = require("express");
const { getFdap } = require("../controller/fdapController");
const router = express.Router();

// FDAP Page
router.get("/", getFdap);

module.exports = router;
