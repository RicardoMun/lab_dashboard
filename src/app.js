import express from "express";
import morgan from "morgan";

/* Server */
const app = express();

app.use(morgan("dev"));

export default app;