const express = require('express');
const router = express.Router();
const {
  getLabs,
  setLab,
  updateLab,
  deleteLab,
} = require('../controllers/labController');

router.route('/').get(getLabs).post(setLab);
router.route('/:id').put(updateLab).delete(deleteLab);

module.exports = router;
