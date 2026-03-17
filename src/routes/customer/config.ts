import type { RouteGroup } from "../interface/RouteGroup.js";
import { OrderRoute } from "./order.routes.js";
import { ProductRouter } from "./product.routes.js";
import { ProfileRoute } from "./profile.routes.js";

export const routeConfigs: RouteGroup[] = [
  { path: "/products", router: ProductRouter, protected: true },
  { path: "/orders", router: OrderRoute, protected: true },
  { path: "/profile", router: ProfileRoute, protected: true },
];