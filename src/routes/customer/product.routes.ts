import { Router } from "express";
import {
  availableProductsController,
  getProductController,
} from "../../controllers/product.controllers.ts";

export const ProductRouter: Router = Router();

ProductRouter.get("/", availableProductsController);
ProductRouter.get("/:productId", getProductController);
