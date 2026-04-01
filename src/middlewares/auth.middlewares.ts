import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { configuration } from "../config/config.js";
import { AppError } from "../utils/appError.js";

// JWT Token Verification
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      throw new AppError({
        statusCode: 401,
        message: "Access denied. Token not found",
      });
    }
    const decoded = jwt.verify(token, configuration.jwt.secret) as {
      id: string;
      role: string;
    };
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof AppError) {
      return next(error);
    }
    next(
      new AppError({
        statusCode: 403,
        message: "Token is invalid or expired.",
      }),
    );
  }
};

// Role-Based Access Control (RBAC)
export const authorizeRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new AppError({ statusCode: 403, message: "Access denied" }));
    }
    next();
  };
};
