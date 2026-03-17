import { Router } from "express";
import { routeConfigs } from "./config.ts";
import { verifyToken } from "../../middlewares/auth.middlewares.ts";

const customerRoute: Router = Router();

routeConfigs.forEach((route) => {
  customerRoute.use(route.path, verifyToken, route.router);
});

export default customerRoute;