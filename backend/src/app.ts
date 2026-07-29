import express from "express";
import cors from "cors";
import helmet from "helmet";

import env from "./config/env";

import { errorHandler } from "./middlewares/error.middleware";
import { apiLimiter } from "./middlewares/rateLimiter";
import courseContentRoutes from "./routes/courseContent.routes";

import routes from "./routes";

// ✅ NEW
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(helmet());

app.use(apiLimiter);

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  })
);

/**
 * Paystack Webhook
 * Must use RAW body for signature verification
 */
app.use(
  "/api/payments/webhook",
  express.raw({ type: "application/json" })
);

/**
 * All other APIs
 */
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TechHarvest API is running 🚀",
    version: "1.0.0",
  });
});

app.use(
  "/api/course-content",
  courseContentRoutes
);

// ✅ Health Check Route
app.use("/api/health", healthRoutes);

app.use("/api", routes);

app.use(errorHandler);

export default app;