const express = require("express");

const multer = require("multer");
const { storage } = require("../lib/cloudinaryConfig");
const {
  authProtectMiddleware,
} = require("../middleware/authProtectMiddleware");
const { getAllServiceLevels, createServiceLevels, deleteServiceLevels } = require("../controllers/ServiceLevelsController");
const upload = multer({ storage: storage });
const router = express.Router();



router.get("/", authProtectMiddleware, getAllServiceLevels);
router.post("/create", upload.single("file"), createServiceLevels);
router.delete("/:id", deleteServiceLevels);


module.exports = router;