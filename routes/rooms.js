const express = require("express");
const router = express.Router();
const roomsController = require("../controllers/roomsController");
const auth = require("../middleware/auth");
const accessControl = require("../middleware/accessControl");

// Routes protégées par auth + accessControl
router.get("/:id", auth, accessControl, roomsController.getRoom);
router.post("/:id/answer", auth, accessControl, roomsController.submitAnswer);

module.exports = router;