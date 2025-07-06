const express = require("express");
const router = express.Router();
const profile = require("../middlewares/multer");

const {
  HandlerAllData,
  HandlerSingleData,
  HandlerSignup,
  HandlerLogin,
  HandlerProtechted,
  HandlerUpdateData,
  HandlerDeleteUser,
} = require("../controllers/authController");

router.get("/", HandlerAllData);
router.get("/:id", HandlerSingleData);
router.post("/signup", profile.single("profile"), HandlerSignup); 
router.post("/login", HandlerLogin);
router.get("/protected", HandlerProtechted);
router.put("/update/:id", profile.single("profile"), HandlerUpdateData);
router.delete("/users/:id",HandlerDeleteUser)

module.exports = router;
