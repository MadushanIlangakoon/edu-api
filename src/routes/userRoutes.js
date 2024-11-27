const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserProfile);

module.exports = router;
