const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Room', RoomSchema);
