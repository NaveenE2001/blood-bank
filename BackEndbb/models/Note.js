const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  usn: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  phoneno: {
    type: Number,
    required: true,
    unique: true,
  },
  addess: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("notes", NoteSchema);
