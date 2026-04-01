import type { Request, Response, NextFunction } from "express";
import { configuration } from "../config/config.js";
import { AppError } from "../utils/appError.js";

// Handler only status 404
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(
    new AppError({
      statusCode: 404,
      message: `${req.originalUrl} is Not Found`,
    }),
  );
};

// Global handler for all error (500, etc)
export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  let message: string = "Internal Server Error";
  if (!err.isInternal || configuration.environment === "development") {
    message = err.message;
  }
  console.error(`[ERROR] ${req.method} ${req.path} >> ${message}`);
  console.error(err.stack);
  return res.status(statusCode).json({
    message: message,
    errors: err.errors ?? undefined,
  });
};
