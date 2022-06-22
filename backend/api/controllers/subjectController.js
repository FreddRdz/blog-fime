const asyncHandler = require('express-async-handler');

const getSubjects = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get subjects' });
});

const setSubjects = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('You can not send a text empty');
  }
  res.status(200).json({ message: 'Set a subject' });
});

const updateSubject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update subject ${req.params.id}` });
});

const deleteSubject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete subject ${req.params.id}` });
});

module.exports = {
  getSubjects,
  setSubjects,
  updateSubject,
  deleteSubject,
};
