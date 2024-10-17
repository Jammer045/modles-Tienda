import { Router } from "express";
import storesRouter from "./storesR.js";
import productsRouter from "./productsR.js";
import employesRouter from "./employesR.js";

const router = Router();

router.use("/stores", storesRouter);
router.use("/products", productsRouter);
router.use("/employes", employesRouter);

export default router;