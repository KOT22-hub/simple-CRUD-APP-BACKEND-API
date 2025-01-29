const express = require("express");
const router = express.Router();

const {
  GetProducts,
  GetProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controller/product.controller.js");

router.get("/", GetProducts);

router.get("/:id", GetProduct);
router.post("/", CreateProduct);

//update
router.put("/:id", UpdateProduct);

// delete product

router.delete(":/id", DeleteProduct);

module.exports = router;
