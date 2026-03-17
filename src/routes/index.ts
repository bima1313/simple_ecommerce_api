import { Router } from "express";
import customerRoute from "./customer/index.js";
import { AuthRouter } from "./auth.routes.js";
import { HealthRouter } from "./health.routes.js";
import adminRoute from "./admin/index.js";
import { RefreshRoute } from "./refresh.routes.js";

const registerRoutes: Router = Router();

// Public Route
registerRoutes.use("/health", HealthRouter);
registerRoutes.use("/auth", AuthRouter);
registerRoutes.use("/refresh", RefreshRoute);
// Protected Route
registerRoutes.use("/admin", adminRoute);
registerRoutes.use(customerRoute);

export default registerRoutes;