import { Router } from "express";
import { routeConfigs } from "./config.js";
import { verifyToken } from "../../middlewares/auth.middlewares.js";

const customerRoute: Router = Router();

routeConfigs.forEach((route) => {
  customerRoute.use(route.path, verifyToken, route.router);
});

export default customerRoute;