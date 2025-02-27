require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../frontEnd"))); // Serve frontend

// Ensure MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env file!");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// ✅ Serve Frontend (Fixes "Cannot GET /Resume/frontEnd/index.html" issue)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/index.html"));
});

// Routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

// Handle 404 errors for unknown routes
app.use((req, res) => {
  res.status(404).send("❌ Route not found");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
