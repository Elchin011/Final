const express = require("express");

const {
  createAppointment,
  deleteAppointment,
  getAllAppointments,
  getAllAppointmentsInDashboard,
  updateAppointmentStatus,
} = require("../controllers/AppointmentController");
const {
  authProtectMiddleware,
} = require("../middleware/authProtectMiddleware");

const router = express.Router();



router.post("/create", createAppointment);
router.get("/", getAllAppointments);
router.get("/dashboard", authProtectMiddleware, getAllAppointmentsInDashboard);
router.patch("/:id/status", updateAppointmentStatus);
router.delete("/:id", deleteAppointment);


module.exports = router;