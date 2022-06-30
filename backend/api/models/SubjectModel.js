const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  nameSubject: {
    type: String,
    required: true,
    unique: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  unitSubject: {
    type: String,
    required: true,
  },
  classHours: {
    type: Number,
    required: true,
  },
  lab: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teachers',
    },
  ],
});

module.exports = mongoose.model('Subject', subjectSchema);
