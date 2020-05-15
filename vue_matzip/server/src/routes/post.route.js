const express = require("express");
const multer = require("multer");
const path = require("path");
const postCommentRouter = require("./postComment.route");
const isAuthenticated = require("../middlewares/isAuthenticated.middleware");
const {
  getPost,
  getPosts,
  createPost,
  removePost,
  updatePost,
  updateLike,
  updateUnLike,
} = require("../controllers/post.controller");

// multer setting
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "..", "..", "public", "images", "post"));
    },
    filename: (req, file, cb) => {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

const router = express.Router();

// merge Route
router.use("/:postId/comment", postCommentRouter);

router.get("/", getPosts);
router.get("/:postId", getPost);
router.post("/create", isAuthenticated, upload.array("images"), createPost);
router.delete("/:postId/remove", isAuthenticated, removePost);
router.put("/:postId/update", isAuthenticated, updatePost);
router.put("/:postId/like", isAuthenticated, updateLike);
router.put("/:postId/unlike", isAuthenticated, updateUnLike);

module.exports = router;
