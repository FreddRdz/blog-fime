const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Lab = require('../models/LabModel');

const getLabs = asyncHandler(async (req, res) => {
  const labs = await Lab.find();
  res.status(200).json(labs);
});

const setLab = asyncHandler(async (req, res) => {
  const {
    nameLab,
    credits,
    unitSubject,
    classHours,
    subject = null,
    teachers = null,
  } = req.body;

  // Finds a repeated subject
  const labRepeated = await Lab.findOne({ nameSubject: nameSubject });

  // If there's one, it will send an error
  if (labRepeated) {
    res.status(409);
    throw new Error('Subject exists');
  }

  // Text fields empties, will send another error
  if (!nameLab && !credits && !unitSubject && !classHours) {
    res.status(400);
    throw new Error('You can not send a text empty on the text fields');
  } else {
    // Everything ok to save in DB
    const lab = await Lab.create({
      nameLab: nameLab,
      credits: credits,
      unitSubject: unitSubject,
      classHours: classHours,
      subject: subject,
      teachers: teachers,
    });

    res.status(201).json(lab);
  }
});

const updateLab = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update subject ${req.params.id}` });
});

const deleteLab = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete subject ${req.params.id}` });
});

module.exports = {
  getLabs,
  setLab,
  updateLab,
  deleteLab,
};
