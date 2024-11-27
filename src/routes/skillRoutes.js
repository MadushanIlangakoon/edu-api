const express = require('express');
const { getSkills, addSkill } = require('../controllers/skillController');

const router = express.Router();

router.get('/', getSkills);
router.post('/', addSkill);

module.exports = router;
