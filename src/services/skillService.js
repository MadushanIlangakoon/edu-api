const Skill = require('../models/skillModel');

exports.getAllSkills = async () => {
  return await Skill.find();
};

exports.createSkill = async (skillData) => {
  const skill = new Skill(skillData);
  return await skill.save();
};
