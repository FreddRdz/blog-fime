const express = require('express');
const router = express.Router();
const {
  getSubjects,
  setSubjects,
  updateSubject,
  deleteSubject,
} = require('../controllers/subjectController');

router.route('/').get(getSubjects).post(setSubjects);
router.route('/:id').put(updateSubject).delete(deleteSubject);

module.exports = router;
