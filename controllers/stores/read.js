import Store from "../../models/StoreK.js";

const allStores = async (req, res) => {
    try {
        const stores = await Store.find();
        return res.status(200).json(stores);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const addressStore = async (req, res) => {
    try {
        const address = await Store.distinct("address");
        return res.status(200).json(address);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const nameStore = async (req, res) => {
    try {
        const names = await Store.distinct("name");
        return res.status(200).json(names);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const storeName = async (req, res) => {
    try {
        const store = await Store.find({ name: req.params.name });
        return res.status(200).json(store);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const storeById = async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);
        return res.status(200).json(store);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const storeByAddress = async (req, res) => {
    try {
        const store = await Store.find({ address: req.params.address });
        return res.status(200).json(store);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { allStores, addressStore, nameStore, storeName, storeById, storeByAddress };