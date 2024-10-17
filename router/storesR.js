import { Router } from "express";
import Store from "../models/StoreK.js";

const storesRouter = Router();

storesRouter.get("/all", async (req, res) => {
    try {
        const stores = await Store.find();
        return res.status(200).json(stores);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

storesRouter.get("/address", async (req, res) => {
    try {
        const addresses = await Store.distinct("address");
        return res.status(200).json(addresses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

storesRouter.get("/name", async (req, res) => {
    try {
        const names = await Store.distinct("name");
        return res.status(200).json(names);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default storesRouter;