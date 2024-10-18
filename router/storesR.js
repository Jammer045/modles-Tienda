import { Router } from "express";
import { allStores, addressStore, nameStore, storeName, storeById, storeByAddress } from "../controllers/stores/read.js";
import { createStore, createStores } from "../controllers/stores/create.js";

const storesRouter = Router();

storesRouter.get("/all", allStores);
storesRouter.get("/address", addressStore);
storesRouter.get("/name", nameStore);
storesRouter.get("/name/:name", storeName);
storesRouter.get("/id/:id", storeById);
storesRouter.get("/address/:address", storeByAddress);
storesRouter.post("/create", createStore);
storesRouter.post("/createMany", createStores);

export default storesRouter;