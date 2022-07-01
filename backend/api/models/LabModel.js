const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  nameLab: {
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
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teachers',
    },
  ],
});

module.exports = mongoose.model('Lab', subjectSchema);
