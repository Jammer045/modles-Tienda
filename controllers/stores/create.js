import Store from "../../models/StoreK.js";

const createStore = async (req, res) => {
    try {
        const store = req.body;  
        let storeCreated = await Store.create(store); 
        return res.status(201).json({ response: storeCreated });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default createStore;