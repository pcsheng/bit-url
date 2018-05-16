const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

// I have no clue how to write the algorithm that converts the URL
// intending on just using the the mongo ID as the short code
const linkSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  hits: {
    type: Number,
    required: true,
    default: 0
  },
  users: {
    type: Array,
    required: true,
    default: []
  }
});

const LinkModel = mongoose.model('Link', linkSchema);

module.exports = LinkModel;