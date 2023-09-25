import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();

/* Routes */
app.listen(3000, () => {
    console.log("Server running on port: ");
    }
);