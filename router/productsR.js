import { Router } from "express";
import { allProducts, nameProduct, markProduct, typeProduct, productById, productByName, productByType } from "../controllers/products/read.js";

const productsRouter = Router();

productsRouter.get("/all", allProducts);
productsRouter.get("/name", nameProduct);
productsRouter.get("/mark", markProduct);
productsRouter.get("/type", typeProduct);
productsRouter.get("/id/:id", productById);
productsRouter.get("/name/:name", productByName);
productsRouter.get("/type/:type", productByType);

export default productsRouter