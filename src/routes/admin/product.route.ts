import { Router } from "express";
import {
  createProductController,
  getProductController,
  getProductsController,
} from "../../controllers/product.controller.ts";
import { authorizeRole } from "../../middlewares/auth.middleware.ts";
import { Role } from "@prisma/client";
import { validate } from "../../middlewares/validate.middleware.ts";
import { productSchema } from "../../shema/productSchema.ts";
import { upload } from "../../middlewares/upload.middleware.ts";

export const ProductRouter: Router = Router();

ProductRouter.get(
  "/",
  authorizeRole([Role.ADMIN]),
  getProductsController,
);

ProductRouter.get(
  "/:productId",
  authorizeRole([Role.ADMIN]),
  getProductController,
);

ProductRouter.post(
  "/create",
  authorizeRole([Role.ADMIN]),
  upload.single('image'),
  validate(productSchema),
  createProductController,
);
