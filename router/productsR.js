import { Router } from "express";
import { allProducts, nameProduct, markProduct, typeProduct } from "../controllers/products/read.js";

const productsRouter = Router();

productsRouter.get("/all", allProducts);
productsRouter.get("/name", nameProduct);
productsRouter.get("/mark", markProduct);
productsRouter.get("/type", typeProduct);

export default productsRouter