import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(port, () => console.log(`Listening to port ${port}`));
});
