const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product.model.js");

const productRoute = require("./routes/product.route.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("hello from node API updated");
});
//GET

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the dynamic 'id' parameter from the request URL
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
{
}
//Create
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
//update

//DELETE
app.delete("/api/products/:id", async (req, res) => {
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
});

const url = process.env.URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  });
