const express = require('express');
//const { SetGoal } = require('../controller/goalcontroller.js');
const router = express.Router();
const {getGoals, setGoal, updateGoal, DeleteGoal } = require('../controllers/goalcontroller.js');

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(DeleteGoal);

module.exports = router