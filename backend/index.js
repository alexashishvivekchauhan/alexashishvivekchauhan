require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (e.g., profile images)
app.use("/profile", express.static(path.join(__dirname, "profile")));

// Routes
app.use("/auth", require("./routes/authRoutes"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
