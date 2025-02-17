const Product = require("../models/products.model.js");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedPorducted = await Product.findById(id);
    res.status(200).json(updatedPorducted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Product Delete successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

/*
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.findOne({ name: `${name}` });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/find/:id/:name", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: id }).select("name");
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
*/
