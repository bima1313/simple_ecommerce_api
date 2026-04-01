import type { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { AppError } from "../utils/appError.js";

export const validate = (schema: z.ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(
          new AppError({
            statusCode: 400,
            message: "Validation Failed",
            errors: error.issues.map((err) => ({
              path: err.path,
              message: err.message,
            })),
          }),
        );
      }
      next(new AppError({ statusCode: 500, message: "Internal server error" }));
    }
  };
};
