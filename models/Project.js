const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Project', ProjectSchema);
