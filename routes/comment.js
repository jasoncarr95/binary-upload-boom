const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { ensureAuth } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:id", ensureAuth, commentController.createComment);

router.put("/likeComment/:postId/:commentId", commentController.likeComment);

router.delete(
  "/deleteComment/:postId/:commentId",
  commentController.deleteComment
);

module.exports = router;
