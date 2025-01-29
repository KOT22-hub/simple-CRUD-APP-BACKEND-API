const Product = require("../models/product.model.js");
const GetProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const GetProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const CreateProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }
    const UpdatedProduct = await Product.findById(id);

    res.status(200).json(UpdatedProduct);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "product ID not found" });
    }
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};

module.exports = {
  GetProducts,
  GetProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
};
