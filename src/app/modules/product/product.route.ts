import { Router } from "express";
import { createProduct } from "./product.controller";

const productRoutes = Router();

productRoutes.route("/").post(createProduct);

export default productRoutes;
