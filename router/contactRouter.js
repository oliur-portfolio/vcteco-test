const express = require("express");
const { getContact } = require("../controller/contactController");
const router = express.Router();

// Contact Page
router.get("/", getContact);

module.exports = router;
