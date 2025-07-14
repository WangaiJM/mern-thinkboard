import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const port = process.env.PORT || 5001;

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(port, () => console.log(`Listening to port ${port}`));
