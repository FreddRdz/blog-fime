const asyncHandler = require('express-async-handler');
const Teacher = require('../models/TeacherModel');

const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find();
  res.status(200).json(teachers);
});

const setTeacher = asyncHandler(async (req, res) => {
  const { name, level = null, comments = null, subjects = null } = req.body;

  // Text fields empties, will send another error
  if (!name) {
    res.status(400);
    throw new Error('You can not send a text empty on the text fields');
  } else {
    // Everything ok to save in DB
    const teacher = await Teacher.create({
      name: name,
      level: level,
      comments: comments,
      subjects: subjects,
    });

    res.status(201).json(teacher);
  }
});

const updateTeacher = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update subject ${req.params.id}` });
});

const deleteTeacher = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete subject ${req.params.id}` });
});

module.exports = {
  getTeachers,
  setTeacher,
  updateTeacher,
  deleteTeacher,
};
