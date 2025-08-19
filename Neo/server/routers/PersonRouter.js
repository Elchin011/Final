const express = require("express");
const { getAllPerson, getAllSpecialties, createPersonSpecialty, createPerson, deletePersonSpecialty, deletePerson } = require("../controllers/PersonController");
const multer = require("multer");
const { storage } = require("../lib/cloudinaryConfig");
const {
  authProtectMiddleware,
} = require("../middleware/authProtectMiddleware");
const upload = multer({ storage: storage });
const router = express.Router();



router.get("/", authProtectMiddleware, getAllPerson);
router.post("/create", upload.single("file"), createPerson);
router.delete("/:id", deletePerson);



router.get("/specialties", getAllSpecialties);
router.post("/create/specialty", createPersonSpecialty);
router.delete("/specialties/:id", deletePersonSpecialty);

module.exports = router;