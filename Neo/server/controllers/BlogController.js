const BlogSchema = require("../models/Blog/BlogSchema");




const getAllBlogs = async (req, res) => {
  try {
    const Blog = await BlogSchema.find();
    if (!Blog || Blog.length === 0) {
      return res.status(404).json({ message: "No blog found" });
    }
    return res.status(200).json({ data: Blog });
  } catch (error) {
    console.error("Error in getAllServiceLevels:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await BlogSchema.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ data: blog });
  } catch (error) {
    console.error("Error in getBlogById:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createBlog = async (req, res) => {


  if (!req.file) {
    return res.status(400).json({
      message: "Image file is required",
    });
  }

  const { title, date } = req.body;
  const exsistingBlog = await BlogSchema.findOne({ title: title });
  if (exsistingBlog) {
    return res.status(400).json({
      message: "Blog already exists",
    });
  }
  const newBlog = new BlogSchema({
    title: title,
    imageUrl: req.file.path,
    date: date,
    
  });
  await newBlog.save();
  return res.status(201).json({
    message: "Blog created successfully",
    data: newBlog,
  });
};


const deleteBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await BlogSchema.findByIdAndDelete(id);
  if (!blog) {
    return res.status(404).json({
      message: "Service not found",
    });
  }
  return res.status(200).json({
    message: "Service deleted successfully",
  });
};

module.exports = {
    getAllBlogs,
    createBlog,
    deleteBlog,
    getBlogById
};
