const express = require("express");
const { getCompany } = require("../controller/companyController");
const router = express.Router();

// Company Page
router.get("/", getCompany);

module.exports = router;
