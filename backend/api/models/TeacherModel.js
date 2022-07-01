const { Schema, model } = require('mongoose');

const teacherSchema = Schema({
  name: {
    type: String,
    required: true,
  },

  level: {
    type: Number,
    required: true,
  },

  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Subject',
    },
  ],

  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

module.exports = model('Teachers', teacherSchema);
