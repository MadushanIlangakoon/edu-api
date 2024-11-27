const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
