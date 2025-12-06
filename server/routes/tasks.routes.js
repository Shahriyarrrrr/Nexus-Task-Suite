import express from "express";
import ctrl from "../controllers/tasks.controller.js";
import auth from "../middleware/auth.middleware.js";

const r = express.Router();

r.get("/", auth, ctrl.all);
r.post("/", auth, ctrl.create);
r.put("/:id", auth, ctrl.update);
r.delete("/:id", auth, ctrl.remove);

export default r;
