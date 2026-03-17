import { Router } from "express";
import {
  availableProductsController,
  getProductController,
} from "../../controllers/product.controllers.js";

export const ProductRouter: Router = Router();

ProductRouter.get("/", availableProductsController);
ProductRouter.get("/:productId", getProductController);
