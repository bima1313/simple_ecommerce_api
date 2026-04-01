import type { NextFunction, Request, RequestHandler, Response } from "express";
import { AppError } from "./appError.js";
import { Prisma } from "@prisma/client";

export const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      if (error instanceof AppError) {
        return next(error);
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.meta) {
        if (error.code === "P2002") {
          return next(
            new AppError({
              statusCode: 400,
              message: `${error.meta.target} already exists`,
            }),
          );
        }
      }
      if (error instanceof Error) {
        return next(new AppError({ message: error.message, isInternal: true }));
      }
      next(new AppError({ message: "Something was wrong" }));
    });
  };
};
