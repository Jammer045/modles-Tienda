import { Router } from "express";
import { allProducts, nameProduct, markProduct, typeProduct, productById, productByName, productByType } from "../controllers/products/read.js";
import { createProduct, createProducts } from "../controllers/products/create.js";

const productsRouter = Router();

productsRouter.get("/all", allProducts);
productsRouter.get("/name", nameProduct);
productsRouter.get("/mark", markProduct);
productsRouter.get("/type", typeProduct);
productsRouter.get("/id/:id", productById);
productsRouter.get("/name/:name", productByName);
productsRouter.get("/type/:type", productByType);
productsRouter.post("/create", createProduct);
productsRouter.post("/createMany", createProducts);

export default productsRouter