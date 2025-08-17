
const PersonSchema = require("../models/Person/PersonSchema");
const PersonSpecialtySchema = require("../models/Person/PersonSpecialtySchema");

const getAllPerson = async (req, res) => {
  try {
    const person = await PersonSchema.find().populate("specialty");
    if (!person || person.length === 0) {
      return res.status(404).json({ message: "No persons found" });
    }
    return res.status(200).json({ data: person });
  } catch (error) {
    console.error("Error in getAllPerson:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllSpecialties = async (req, res) => {
  const specialties = await PersonSpecialtySchema.find();
  if (!specialties || specialties.length === 0) {
    return res.status(404).json({
      message: "No specialties found",
    });
  }
  return res.status(200).json({
    data: specialties,
  });
};

const createPersonSpecialty = async (req, res) => {
  const { name } = req.body;
  const exsistingSpecialty = await PersonSpecialtySchema.findOne({
    name: name,
  });
  if (exsistingSpecialty) {
    return res.status(400).json({
      message: "Specialty already exists",
    });
  }
  const newSpecialty = new PersonSpecialtySchema({
    name: name,
  });
  await newSpecialty.save();
  return res.status(201).json({
    message: "Specialty created successfully",
    data: newSpecialty,
  });
};


const deletePersonSpecialty = async (req, res) => {
  const { id } = req.params;

  const specialty = await PersonSpecialtySchema.findByIdAndDelete(id);
  if (!specialty) {
    return res.status(404).json({
      message: "Specialty not found",
    });
  }
  return res.status(200).json({
    message: "Specialty deleted successfully",
  });
};



const createPerson = async (req, res) => {


  if (!req.file) {
    return res.status(400).json({
      message: "Image file is required",
    });
  }

  const { name, specialty } = req.body;
  const exsistingPerson = await PersonSchema.findOne({ name: name });
  if (exsistingPerson) {
    return res.status(400).json({
      message: "Person already exists",
    });
  }
  const newPerson = new PersonSchema({
    name: name,
    imageUrl: req.file.path,
    specialty: specialty,
  });
  await newPerson.save();
  return res.status(201).json({
    message: "Person created successfully",
    data: newPerson,
  });
};


const deletePerson = async (req, res) => {
  const { id } = req.params;

  const person = await PersonSchema.findByIdAndDelete(id);
  if (!person) {
    return res.status(404).json({
      message: "Person not found",
    });
  }
  return res.status(200).json({
    message: "Person deleted successfully",
  });
};

module.exports = {
    getAllPerson,
    getAllSpecialties,
    createPersonSpecialty,
    createPerson,
    deletePerson,
    deletePersonSpecialty
};
