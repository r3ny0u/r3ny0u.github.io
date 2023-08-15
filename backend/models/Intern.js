const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: String,
});

const Intern = mongoose.model('Intern', internSchema);

module.exports = Intern;
