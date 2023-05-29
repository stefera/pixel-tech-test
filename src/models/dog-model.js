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
    type: String, //change to Date type later
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Dog", dogSchema);
