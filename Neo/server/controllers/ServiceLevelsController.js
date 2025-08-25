const ServiceLevelsSchema = require("../models/ServiceLevels/ServiceLevelsSchema");

const getAllServiceLevels = async (req, res) => {
  try {
    const serviceLevels = await ServiceLevelsSchema.find();
    if (!serviceLevels || serviceLevels.length === 0) {
      return res.status(404).json({ message: "No service levels found" });
    }
    return res.status(200).json({ data: serviceLevels });
  } catch (error) {
    console.error("Error in getAllServiceLevels:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const createServiceLevels = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "Image file is required",
    });
  }

  const { name, price } = req.body;
  const exsistingService = await ServiceLevelsSchema.findOne({ name: name });
  if (exsistingService) {
    return res.status(400).json({
      message: "Service already exists",
    });
  }
  const newService = new ServiceLevelsSchema({
    name: name,
    imageUrl: req.file.path,
    price: price,
  });
  await newService.save();
  return res.status(201).json({
    message: "Service created successfully",
    data: newService,
  });
};

const deleteServiceLevels = async (req, res) => {
  const { id } = req.params;

  const serviceLevel = await ServiceLevelsSchema.findByIdAndDelete(id);
  if (!serviceLevel) {
    return res.status(404).json({
      message: "Service not found",
    });
  }
  return res.status(200).json({
    message: "Service deleted successfully",
  });
};

const updateServiceLevels = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const serviceLevel = await ServiceLevelsSchema.findByIdAndUpdate(
    id,
    {
      name: name,
      price: price,
      imageUrl: req.file ? req.file.path : undefined,
    },
    { new: true }
  );

  if (!serviceLevel) {
    return res.status(404).json({
      message: "Service not found",
    });
  }

  return res.status(200).json({
    message: "Service updated successfully",
    data: serviceLevel,
  });
};

module.exports = {
  getAllServiceLevels,
  createServiceLevels,
  deleteServiceLevels,
  updateServiceLevels,
};
