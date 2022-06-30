const express = require('express');
const router = express.Router();
const {
  getTeachers,
  setTeacher,
  updateTeacher,
  deleteTeacher,
} = require('../controllers/teacherController');

router.route('/').get(getTeachers).post(setTeacher);
router.route('/:id').put(updateTeacher).delete(deleteTeacher);

module.exports = router;
