module.exports.getAllUsers = (req, res, next) => {
  res.send("All users from CONTROLLER");
};

module.exports.addUser = (req, res) => {
  res.send("Added user from CONTROLLER");
};
