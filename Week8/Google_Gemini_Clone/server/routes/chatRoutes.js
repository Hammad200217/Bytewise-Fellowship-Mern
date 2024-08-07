import express from "express";
import {
  chatController,
  deleteChaController,
  getPromptsController,
  getSinglePromptController,
} from "../controllers/chatContoller.js";
import { requireSignedIn } from "../middlewares/userMiddleware.js";


const router = express.Router();

//generate a prompt
router.post("/ask-gemini", requireSignedIn, chatController);

// get all chats
router.get("/get-prompts", getPromptsController);

// get prompt by id
router.get("/get-single-prompt/:id", getSinglePromptController);

//delete the prompt
router.delete("/delete-chat/:id", deleteChaController);


export { router as chatRouter };