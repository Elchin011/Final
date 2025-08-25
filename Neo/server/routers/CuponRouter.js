const express = require("express");
const { createCoupon, getCoupons, validateCoupon, updateCoupon } = require("../controllers/CuponController");
const router = express.Router();


// Admin: Kupon yaratmaq
router.post("/create", createCoupon);

// Kupon siyahısı
router.get("/", getCoupons);

// Checkout zamanı kuponu yoxlamaq
router.post("/validate", validateCoupon);

router.patch("/:id", updateCoupon);

module.exports = router;
