import type { RouteGroup } from "../interface/RouteGroup.ts";
import { OrderRoute } from "./order.routes.ts";
import { ProductRouter } from "./product.routes.ts";
import { ProfileRoute } from "./profile.routes.ts";

export const routeConfigs: RouteGroup[] = [
  { path: "/products", router: ProductRouter, protected: true },
  { path: "/orders", router: OrderRoute, protected: true },
  { path: "/profile", router: ProfileRoute, protected: true },
];