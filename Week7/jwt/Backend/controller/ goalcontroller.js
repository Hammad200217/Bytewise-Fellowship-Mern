const asyncHandler = require("express-async-handler")

const Goal = require("../models/goalModel")

// @desc Get goals
// @route GET /api/goals
// @access Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({})
  res.status(200).json(goals)
})
// @desc Set goal
// @route SET /api/goals
// @access Public
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text){
    res.status(400)
    throw new Error('Please Add a Text Feild');

  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })
  res.status(200).json({ message: "Set Goals" })
})
// @desc PUT goal
// @route PUT /api/goals/:id
// @access Public
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(404)
    throw new Error("Goal not found")
  }

const user = await UserActivation.findById (req.user.id)

//check for user
if (!user ){
  res.status(401)
  throw new Error('user not found')
}
 //make sure the logged in user matches
 if (goal.user.toString()!== user.id){
  res.status(401)
  throw new Error('User Not Authorzed')

 }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json({ message: "Update Goals ${req.params.id}" });
})
// @desc Delete goal
// @route Delete /api/goals/:id
// @access Public
const DeleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(404)
    throw new Error("Goal not found")
  }
  await goal.remove()

  res.status(200).json({ message: "Delete Goals ${req.params.id}" });
})

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  DeleteGoal,
}
