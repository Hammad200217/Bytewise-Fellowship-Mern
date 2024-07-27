const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel.js");

// @desc Get goals
// @route GET /api/goals
// @access Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
});
// @desc Set goal
// @route SET /api/goals
// @access Public
const setGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set Goals" });
});
// @desc PUT goal
// @route PUT /api/goals/:id
// @access Public
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: "Update Goals ${req.params.id}" });
});
// @desc Delete goal
// @route Delete /api/goals/:id
// @access Public
const DeleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  await goal.remove();

  res.status(200).json({ message: "Delete Goals ${req.params.id}" });
});
module.exports = {
  
  getGoals,
  setGoal,
  updateGoal,
  DeleteGoal,
};
