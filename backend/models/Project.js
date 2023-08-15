const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
