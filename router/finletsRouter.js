const express = require("express");
const { getFinlets } = require("../controller/finletsController");
const router = express.Router();

// Finlets Page
router.get("/", getFinlets);

module.exports = router;
