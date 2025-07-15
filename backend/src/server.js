import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 5001;

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(port, () => console.log(`Listening to port ${port}`));
