import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import cookieParser from "cookie-parser";

/* Server */
const app = express();

app.use(morgan("dev"));
app.use(express.json()); /* translate req.body  */
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);


export default app;