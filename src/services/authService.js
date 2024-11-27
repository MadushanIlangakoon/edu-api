const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({ ...userData, password: hashedPassword });
  return await user.save();
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.getUserById = async (id) => {
  return await User.findById(id).select('-password');
};
