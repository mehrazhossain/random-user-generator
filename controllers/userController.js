const users = require("../users.json");
const fs = require("fs");

module.exports.getAllUsers = (req, res, next) => {
  res.send(users);
};
module.exports.getUserById = (req, res, next) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === Number(id));
  res.send(findUser);
};

module.exports.addUser = (req, res) => {
  console.log(users);
  const newUser = req.body;
  // console.log(newUser);
  users.push(newUser);
  console.log(users);
  res.send("Added new user!!!");
};
