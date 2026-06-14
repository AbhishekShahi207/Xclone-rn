import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { createComment, deleteComment, getComments } from "../controllers/comment.controller.js";

const router =express.Router()

//public routes
router.get("/post/:postId",getComments)

//proteted routes
router.post("/post/:postId",protectRoute,createComment)
router.post("/:comentId",protectRoute,deleteComment)


export default router;