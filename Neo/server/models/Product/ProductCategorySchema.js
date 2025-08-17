const mongoose = require("mongoose");
const ProductCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ProductCategory", ProductCategorySchema);
