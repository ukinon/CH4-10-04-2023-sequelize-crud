const { Product } = require("../models");

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      stock,
    });
    res.status(200).json({
      status: success,
      data: {
        newProduct,
      },
    });
  } catch (err) {}
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: success,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: failed,
      message: err.meassage,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: success,
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: failed,
      message: err.meassage,
    });
  }
};

const updateProductById = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const id = req.params.id;
    const product = await Product.update(
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
      status: success,
      message: "data updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: failed,
      message: err.meassage,
    });
  }
};

const deleteProductById = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const id = req.params.id;
    const product = await Product.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: success,
      message: "data deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: failed,
      message: err.meassage,
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
