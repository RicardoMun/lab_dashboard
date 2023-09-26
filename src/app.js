import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";


/* Server */
const app = express();

app.use(morgan("dev"));
app.use(express.json()); /* translate req.body  */

app.use("/api", authRoutes);


export default app;