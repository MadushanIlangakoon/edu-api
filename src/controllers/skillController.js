const skillService = require('../services/skillService');

exports.getSkills = async (req, res) => {
  try {
    const skills = await skillService.getAllSkills();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addSkill = async (req, res) => {
  try {
    const skill = await skillService.createSkill(req.body);
    res.status(201).json({ message: 'Skill added successfully', skill });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
