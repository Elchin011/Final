const express = require("express");
const {
  getAllProducts,
  getAllSizes,
  getAllColors,
  getAllCategories,
  createProductSize,
  createProductColor,
  createProductCategory,
  createProduct,
  createOrder,
  getAllOrders,
  getAllOrdersInDashboard,
  updateOrderStatus,
  deleteProduct,
  deleteProductCategory,
  deleteProductSize,
  deleteProductColor,
  getProductById,
  deleteOrder,
  updateProduct,
} = require("../controllers/ProductController");
const multer = require("multer");
const { storage } = require("../lib/cloudinaryConfig");
const {
  authProtectMiddleware,
} = require("../middleware/authProtectMiddleware");
const upload = multer({ storage: storage });
const router = express.Router();

router.get("/products", authProtectMiddleware, getAllProducts);
router.post("/product/create", upload.single("file"), createProduct);
router.patch("/products/:id", updateProduct);
router.get("/products/sizes", getAllSizes);
router.post("/products/create/size", createProductSize);
router.delete("/products/sizes/:id", deleteProductSize);
router.get("/products/colors", getAllColors);
router.post("/products/create/color", createProductColor);
router.delete("/products/colors/:id", deleteProductColor);
router.post("/products/create/category", createProductCategory);
router.delete("/products/categories/:id", deleteProductCategory);
router.get("/products/categories", getAllCategories);
router.delete("/products/:id", deleteProduct);
router.get("/products/:id", getProductById);
router.post("/create/order", createOrder);
router.get("/orders", getAllOrders);
router.get("/admin/orders", authProtectMiddleware, getAllOrdersInDashboard);
router.patch("/orders/:id/status", updateOrderStatus);
router.delete("/orders/:id", deleteOrder);




module.exports = router;
