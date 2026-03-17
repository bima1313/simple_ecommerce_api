import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getProductsController,
  updateProductController,
} from "../../controllers/product.controllers.ts";
import { authorizeRole } from "../../middlewares/auth.middlewares.ts";
import { Role } from "@prisma/client";
import { validate } from "../../middlewares/validate.middlewares.ts";
import {
  patchProductSchema,
  productSchema,
} from "../../shema/productSchema.ts";
import { upload } from "../../middlewares/upload.middlewares.ts";

export const ProductRouter: Router = Router();

ProductRouter.get("/", authorizeRole([Role.ADMIN]), getProductsController);

ProductRouter.get(
  "/:productId",
  authorizeRole([Role.ADMIN]),
  getProductController,
);

ProductRouter.post(
  "/create",
  authorizeRole([Role.ADMIN]),
  upload.single("image"),
  validate(productSchema),
  createProductController,
);

ProductRouter.patch(
  "/:productId",
  authorizeRole([Role.ADMIN]),
  upload.single("image"),
  validate(patchProductSchema),
  updateProductController,
);

ProductRouter.delete(
  "/:productId",
  authorizeRole([Role.ADMIN]),
  deleteProductController,
);
