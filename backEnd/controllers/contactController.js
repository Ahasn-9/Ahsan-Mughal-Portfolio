const Contact = require("../models/Contact");

// Save contact form data
exports.saveContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation (Prevent Empty Fields)
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Save to Database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res
      .status(201)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
