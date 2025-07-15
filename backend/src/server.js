import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(port, () => console.log(`Listening to port ${port}`));
});
