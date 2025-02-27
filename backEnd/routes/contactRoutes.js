const express = require("express");
const { saveContact } = require("../controllers/contactController");

const router = express.Router();

// Test Route
router.get("/", (req, res) => res.json({ message: "Contact API Working!" }));

// Save Contact
router.post("/", saveContact);

module.exports = router;
