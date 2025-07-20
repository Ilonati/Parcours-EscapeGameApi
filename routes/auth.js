const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);

// Route protégée par le middleware d'authentification
router.get("/me", authMiddleware, authController.me);

module.exports = router;