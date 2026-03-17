import { Router } from "express";
import customerRoute from "./customer/index.ts";
import { AuthRouter } from "./auth.routes.ts";
import { HealthRouter } from "./health.routes.ts";
import adminRoute from "./admin/index.ts";
import { RefreshRoute } from "./refresh.routes.ts";

const registerRoutes: Router = Router();

// Public Route
registerRoutes.use("/health", HealthRouter);
registerRoutes.use("/auth", AuthRouter);
registerRoutes.use("/refresh", RefreshRoute);
// Protected Route
registerRoutes.use("/admin", adminRoute);
registerRoutes.use(customerRoute);

export default registerRoutes;