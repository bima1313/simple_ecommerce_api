import { Router } from "express";
import { routeConfigs } from "./config.js";
import { verifyToken } from "../../middlewares/auth.middlewares.js";

const adminRoute: Router = Router();

routeConfigs.forEach((route) => {
  adminRoute.use(route.path, verifyToken, route.router);
});

export default adminRoute;