const usertemplate = require("../models/usertemplate.model");

//CRUD OPERATIONS

//post request
const addUser = async (req, res) => {
  const newUser = new usertemplate(req.body);
  const savedUser = await newUser.save();
  try {
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { addUser };
