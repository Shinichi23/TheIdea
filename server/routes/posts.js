const express = require("express");

const { getPosts } = require("../controllers/posts");
const { createPost } = require("../controllers/posts");
const { getPost } = require("../controllers/posts");
const { updatePost } = require("../controllers/posts");
const { deletePost } = require("../controllers/posts");
const { likePost } = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;
