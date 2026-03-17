import { Router } from "express";
import { routeConfigs } from "./config.ts";
import { verifyToken } from "../../middlewares/auth.middlewares.ts";

const adminRoute: Router = Router();

routeConfigs.forEach((route) => {
  adminRoute.use(route.path, verifyToken, route.router);
});

export default adminRoute;