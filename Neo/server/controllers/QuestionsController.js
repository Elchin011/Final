const QuestionsSchema = require("../models/Questions/QuestionsSchema");

const getAllQuestions = async (req, res) => {
  try {
    const questions = await QuestionsSchema.find();
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }
    return res.status(200).json({ data: questions });
  } catch (error) {
    console.error("Error in getAllQuestions:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const createQuestion = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Question and answer are required" });
    }

    const existingQuestion = await QuestionsSchema.findOne({ question: question });
    if (existingQuestion) {
      return res.status(400).json({ message: "Question already exists" });
    }

    const newQuestion = new QuestionsSchema({
      question: question,
      answer: answer,
    });

    await newQuestion.save();

    return res.status(201).json({
      message: "Question created successfully",
      data: newQuestion,
    });
  } catch (error) {
    console.error("Error in createQuestion:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await QuestionsSchema.findByIdAndDelete(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    return res
      .status(200)
      .json({ message: "Question deleted successfully", data: question });
  } catch (error) {
    console.error("Error in deleteQuestion:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllQuestions,
  createQuestion,
  deleteQuestion,
};
