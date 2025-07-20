const rooms = require("../data/rooms");
const { users } = require("../repositories/userRepository");

exports.getRoom = (req, res) => {
  const roomId = parseInt(req.params.id);
  const room = rooms.find(r => r.id === roomId);

  if (!room) return res.status(404).json({ error: "Room not found" });

  res.json({ question: room.question });
};

exports.submitAnswer = (req, res) => {
  const roomId = parseInt(req.params.id);
  const { answer } = req.body;
  const user = users.find(u => u.username === req.user.username);
  const room = rooms.find(r => r.id === roomId);

  if (!room) return res.status(404).json({ error: "Room not found" });

  if (room.answer.toLowerCase() === answer.trim().toLowerCase()) {
    if (user.currentRoom < roomId + 1) user.currentRoom = roomId + 1;

    if (user.currentRoom > rooms.length) {
      return res.json({ success: true, message: "Congratulations! You've completed the game!" });
    }

    return res.json({ success: true, nextRoom: user.currentRoom });
  } else {
    return res.status(400).json({ error: "Wrong answer" });
  }
};