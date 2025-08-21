const AppointmentSchema = require("../models/Appointment/AppointmentSchema");
const PersonSchema = require("../models/Person/PersonSchema");
const UserSchema = require("../models/User/UserSchema");

const createAppointment = async (req, res) => {
  const { user, doctor, status, date, time, firstName, lastname, email, phone } =
    req.body;
  try {
    const foundUser = await UserSchema.findById(user);
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const foundDoctor = await PersonSchema.findById(doctor);
    if (!foundDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    const newAppointment = new AppointmentSchema({
      user: user,
      doctor: doctor,
      status: status || "pending",
      firstName: firstName,
      lastname: lastname,
      email: email,
      phone: phone,
      date: date,
      time: time,
    });
    await newAppointment.save();
    return res.status(201).json({
      message: "Appointment created successfully",
      data: newAppointment,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await AppointmentSchema.findByIdAndDelete(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    return res
      .status(200)
      .json({ message: "Appointment deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

const getAllAppointments = async (req, res) => {
  const userId = req.query.user;
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }
  try {
    const appointments = await AppointmentSchema.find({
      user: userId,
    }).populate("user").populate("doctor");
    if (!appointments || appointments.length === 0) {
      return res
        .status(404)
        .json({ message: "No appointments found for this user" });
    }
    return res.status(200).json({
      data: appointments,
      message: "User's appointments fetched successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

const getAllAppointmentsInDashboard = async (req, res) => {
  try {
    const appointments = await AppointmentSchema.find()
      .populate("user")
      .populate("doctor");
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: "No appointments found" });
    }
    return res.status(200).json({
      data: appointments,
      message: "All appointments fetched successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }
  try {
    const appointment = await AppointmentSchema.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    return res
      .status(200)
      .json({ message: "Appointment status updated", data: appointment });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  createAppointment,
  deleteAppointment,
  getAllAppointments,
  getAllAppointmentsInDashboard,
  updateAppointmentStatus,
};
