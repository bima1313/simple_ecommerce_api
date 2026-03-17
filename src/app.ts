import express, { type Application } from "express";
import cors from "cors";
import registerRoutes from "./routes/index.js";
import {
  errorMiddleware,
  notFoundHandler,
} from "./middlewares/error.middlewares.js";
import { configuration } from "./config/config.js";

const app: Application = express();

app.use(cors());
app.use(express.json());

// standarization time zone
configuration.timezone;
// main app
app.use("/api", registerRoutes);

// not found route
app.use(notFoundHandler);
// ERROR MIDDLEWARE
app.use(errorMiddleware);

if (process.env.NODE_ENV !== "production") {
  const PORT = configuration.port;
  app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
  });
}

export default app;