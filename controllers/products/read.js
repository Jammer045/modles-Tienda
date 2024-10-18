import Product from "../../models/ProductK.js";

const allProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const nameProduct = async (req, res) => {
    try {
        const names = await Product.distinct("name");
        return res.status(200).json(names);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const typeProduct = async (req, res) => {
    try {
        const types = await Product.distinct("type");
        return res.status(200).json(types);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const markProduct = async (req, res) => {
    try {
        const marks = await Product.distinct("mark");
        return res.status(200).json(marks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const productById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const productByName = async (req, res) => {
    try {
        const product = await Product.find({ name: req.params.name });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const productByType = async (req, res) => {
    try {
        const product = await Product.find({ type: req.params.type });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// En tu controlador typeProduct
const typeProducts = async (req, res) => {
    try {
      const products = await Product.find({ "type": req.params.type });
      
      if (products.length > 1) {
        res.status(300).send(products);
      } else if (products.length === 1) {
        res.status(200).send(products[0]);
      } else {
        res.status(404).send({ message: "No se encontraron productos" });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

export { allProducts, nameProduct, markProduct, typeProduct, typeProducts, productById, productByName, productByType };