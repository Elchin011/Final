const express = require("express");
const multer = require("multer");
const {
  getAllQuestions,
  createQuestion,
  deleteQuestion,
} = require("../controllers/QuestionsController");
const { authProtectMiddleware } = require("../middleware/authProtectMiddleware");
const { storage } = require("../lib/cloudinaryConfig");
const upload = multer({storage: storage}); 
const router = express.Router();

router.get("/", authProtectMiddleware, getAllQuestions);
router.post("/create", upload.none(), createQuestion); 
router.delete("/:id", deleteQuestion);

module.exports = router; 
