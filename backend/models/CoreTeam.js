const mongoose = require('mongoose');

const coreTeamSchema = new mongoose.Schema({
  pimg: {
    type: String,
    default: 'demoimg.png'
  },
  name: {
    type: String,
    required: true,
  },
  branch: {
    type:String,
  },
  clubPosition: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
});

const Team = mongoose.model("Coreteam", coreTeamSchema);

module.exports = Team;
