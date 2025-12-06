import express from "express";
import ctrl from "../controllers/users.controller.js";
import auth from "../middleware/auth.middleware.js";
import roles from "../middleware/roles.middleware.js";

const r = express.Router();

r.get("/", auth, roles.admin, ctrl.all);
r.get("/:id", auth, ctrl.one);
r.put("/:id", auth, roles.admin, ctrl.update);
r.delete("/:id", auth, roles.admin, ctrl.remove);

export default r;
