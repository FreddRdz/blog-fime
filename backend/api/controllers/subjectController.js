const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Subject = require('../models/SubjectModel');

const getSubjects = asyncHandler(async (req, res) => {
  const subjects = await Subject.find();
  res.status(200).json(subjects);
});

const setSubjects = asyncHandler(async (req, res) => {
  const {
    nameSubject,
    credits,
    unitSubject,
    classHours,
    lab = null,
    teachers = null,
  } = req.body;

  // Finds a repeated subject
  const subjectRepeated = await Subject.findOne({ nameSubject: nameSubject });

  // If there's one, it will send an error
  if (subjectRepeated) {
    res.status(409);
    throw new Error('Subject exists');
  }

  // Text fields empties, will send another error
  if (!nameSubject && !credits && !unitSubject && !classHours) {
    res.status(400);
    throw new Error('You can not send a text empty on the text fields');
  } else {
    // Everything ok to save in DB
    const subject = await Subject.create({
      nameSubject: nameSubject,
      credits: credits,
      unitSubject: unitSubject,
      classHours: classHours,
      lab: lab,
      teachers: teachers,
    });

    res.status(201).json(subject);
  }
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
