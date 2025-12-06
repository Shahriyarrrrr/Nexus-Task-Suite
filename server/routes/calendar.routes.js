import express from "express";
import ctrl from "../controllers/calendar.controller.js";
import auth from "../middleware/auth.middleware.js";

const r = express.Router();

r.get("/", auth, ctrl.getEvents);
r.post("/", auth, ctrl.addEvent);
r.delete("/:id", auth, ctrl.removeEvent);

export default r;
