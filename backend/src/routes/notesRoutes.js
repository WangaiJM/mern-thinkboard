import express from "express";
import {
  createNotes,
  deleteNotes,
  getAllNotes,
  getSingleNote,
  updateNotes,
} from "../controllers/notesControllers.js";

const route = express.Router();

route.get("/", getAllNotes);
route.get("/:id", getSingleNote);
route.post("/", createNotes);
route.put("/:id", updateNotes);
route.delete("/:id", deleteNotes);

export default route;
