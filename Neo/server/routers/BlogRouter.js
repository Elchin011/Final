const express = require("express");

const multer = require("multer");
const { storage } = require("../lib/cloudinaryConfig");
const {
  authProtectMiddleware,
} = require("../middleware/authProtectMiddleware");

const { getAllBlogs, createBlog, deleteBlog, getBlogById } = require("../controllers/BlogController");
const upload = multer({ storage: storage });
const router = express.Router();



router.get("/", authProtectMiddleware, getAllBlogs);
router.post("/create", upload.single("file"), createBlog);
router.delete("/:id", deleteBlog);
router.get("/:id", getBlogById);


module.exports = router;