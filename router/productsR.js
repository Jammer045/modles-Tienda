import { Router } from "express";
import Product from "../models/ProductK.js";

const productsRouter = Router();

productsRouter.get("/all", async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

productsRouter.get("/name", async (req, res) => {
    try {
        const names = await Product.distinct("name");
        return res.status(200).json(names);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

productsRouter.get("/mark", async (req, res) => {
    try {
        const marks = await Product.distinct("mark");
        return res.status(200).json(marks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

productsRouter.get("/type", async (req, res) => {
    try {
        const types = await Product.distinct("type");
        return res.status(200).json(types);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default productsRouter