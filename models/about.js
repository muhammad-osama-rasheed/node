const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1500,
    trim: true,
    default: "No description provided",
  },
});

const About = mongoose.model("About", aboutSchema);
module.exports = About;
