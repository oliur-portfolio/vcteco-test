const express = require("express");
const { getPartners } = require("../controller/partnersController");
const router = express.Router();

// Partners Page
router.get("/", getPartners);

module.exports = router;
