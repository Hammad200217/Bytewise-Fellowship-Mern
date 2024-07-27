const express = require('express');
const router = express.Router();
const {
    getGoals, 
    setGoal, 
    updateGoal, 
    DeleteGoal 
} = require('../controllers/goalcontroller');

const {protect} = require('../middleware/authMiddleware')
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect,updateGoal).delete(protect,DeleteGoal);

module.exports = router 