import { Router } from "express";
import { allStores, addressStore, nameStore } from "../controllers/stores/read.js";

const storesRouter = Router();

storesRouter.get("/all", allStores);
storesRouter.get("/address", addressStore);
storesRouter.get("/name", nameStore);

export default storesRouter;