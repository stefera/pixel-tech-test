const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Dog", dogSchema);
