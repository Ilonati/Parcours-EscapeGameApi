// repositories/userRepository.js

const users = []; // Base en mémoire

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

function createUser(user) {
  users.push(user);
  return user;
}

function getAllUsers() {
  return users;
}

module.exports = {
  users,
  findUserByUsername,
  createUser,
  getAllUsers,
};