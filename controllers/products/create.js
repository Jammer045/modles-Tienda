import Product from "../../models/ProductK.js";

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        return res.status(201).json(savedProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createProducts = async (req, res) => {
    try {
        const products = req.body;
        const productsCreated = await Product.insertMany(products);
        return res.status(201).json({ response: productsCreated });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { createProduct, createProducts };