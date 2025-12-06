//import cors from "cors";
// app.use(cors()); //

import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import config from "./config/default.js";
import db from "./db/index.js";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import calendarRoutes from "./routes/calendar.routes.js";
import mediaRoutes from "./routes/media.routes.js";
import paymentsRoutes from "./routes/payments.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*"}));
app.use(helmet());

const limiter = rateLimit({ windowMs: 60000, max: 120 });
app.use(limiter);

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/tasks", tasksRoutes);
app.use("/calendar", calendarRoutes);
app.use("/media", mediaRoutes);
app.use("/payments", paymentsRoutes);

app.get("/", (req,res) => res.json({ status:"online" }));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

app.listen(config.port, () => {
  console.log("Server running on port", config.port);
  db.connect();
});
