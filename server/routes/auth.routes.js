import express from "express";
import ctrl from "../controllers/auth.controller.js";

const r = express.Router();

r.post("/login", ctrl.login);
r.post("/register", ctrl.register);
r.post("/refresh", ctrl.refresh);

export default r;
