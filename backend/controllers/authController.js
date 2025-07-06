const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

// Get all users
const HandlerAllData = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get single user
const HandlerSingleData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Signup
const HandlerSignup = async (req, res) => {
  try {
    const { name, email, phone, password, address, role } = req.body;
    if (!phone || !password) {
      return res.status(400).json({ msg: "Phone and password are required" });
    }
    const exists = await User.findOne({ phone });
    if (exists) {
      return res.status(400).json({ msg: "Phone already registered" });
    }
    const profile = req.file ? req.file.filename : "";
    const newUser = new User({
      name: name || "",
      email,
      phone,
      address: address || "",
      password,
      profile,
      role: role || "user",
    });
    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({
      msg: "Signup successful",
      token,
      role: newUser.role,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login
const HandlerLogin = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, phone: user.phone, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      role: user.role,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Protected route
const HandlerProtechted = (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ msg: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "Invalid token" });

    res.json({
      msg: "Protected data accessed",
      userId: decoded.id,
      role: decoded.role,
    });
  });
};

// Update user
const HandlerUpdateData = async (req, res) => {
  try {
    const { name, email, phone, address, password, role } = req.body;
    const id = req.params.id;

    const existing = await User.findById(id);
    if (!existing) return res.status(404).json({ message: "User not found" });

    // Delete old image if new uploaded
    let profile = existing.profile;
    if (req.file) {
      if (profile) {
        const oldPath = path.join(__dirname, "../profiles", profile);
        fs.unlink(oldPath, (err) => {
          if (err) console.log("Failed to delete old image:", err);
        });
      }
      profile = req.file.filename;
    }

    const updated = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        address,
        password,
        role: role || existing.role,
        profile,
      },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Error updating user", error });
  }
};

// delete
const HandlerDeleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    // Delete profile image if exists
    if (user.profile) {
      const profilePath = path.join(__dirname, "../profiles", user.profile);
      fs.unlink(profilePath, (err) => {
        if (err) {
          console.error("Failed to delete profile image:", err);
        } else {
          console.log("Profile image deleted:", user.profile);
        }
      });
    }
    // Delete user from DB
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User and profile image deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  HandlerAllData,
  HandlerSingleData,
  HandlerSignup,
  HandlerLogin,
  HandlerProtechted,
  HandlerUpdateData,
  HandlerDeleteUser,
};
