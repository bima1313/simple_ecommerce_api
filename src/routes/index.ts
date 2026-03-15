import { Router } from "express";
import customerRoute from "./customer/index.ts";
import { AuthRouter } from "./auth.route.ts";
import { HealthRouter } from "./health.route.ts";
import adminRoute from "./admin/index.ts";
import { RefreshRoute } from "./refresh.route.ts";

const registerRoutes: Router = Router();

// Public Route
registerRoutes.use("/health", HealthRouter);
registerRoutes.use("/auth", AuthRouter);
registerRoutes.use("/refresh", RefreshRoute);
// Protected Route
registerRoutes.use("/admin", adminRoute);
registerRoutes.use(customerRoute);

export default registerRoutes;