import express from "express";
import cors from "cors";

import routes from "./routes";
import paymentRoutes from "./routes/payment.routes";

const app = express();

app.use(cors());

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

/**
 * Register webhook route first
 */
app.use("/api/payments", paymentRoutes);

/**
 * Register all remaining routes
 */
app.use("/api", routes);

export default app;
