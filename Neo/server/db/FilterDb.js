// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const dbUrl = process.env.DB_URL;

// MongoDB bağlantısı
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema & Model
const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  color: String,
  price: Number,
  imageUrl: String,
});

const Product = mongoose.model("Product", ProductSchema);

// 1️⃣ Məhsulları filter ilə gətir
app.get("/products", async (req, res) => {
  try {
    const { category, color } = req.query;
    let filter = {};

    if (category) {
      filter.category = category;
    }
    if (color) {
      filter.color = color;
    }

    const products = await Product.find(filter);
    res.json({ data: products });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 2️⃣ Yalnız kateqoriyalar
app.get("/products/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 3️⃣ Yalnız rənglər
app.get("/products/colors", async (req, res) => {
  try {
    const colors = await Product.distinct("color");
    res.json(colors);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3001, () => console.log("✅ Server 3001 portunda işləyir"));
