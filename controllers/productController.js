const { product } = require("../models");

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const newProduct = await product.create({
      name,
      price,
      stock,
    });
    res.status(200).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (err) {}
};

const getAllProducts = async (req, res) => {
  try {
    console.log(product);
    const products = await product.findAll();
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const prod = await product.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        prod,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const updateProductById = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const id = req.params.id;
    await product.update(
      {
        name,
        price,
        stock,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      status: "success",
      message: "data updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const deleteProductById = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const id = req.params.id;
    await product.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: "success",
      message: "data deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
