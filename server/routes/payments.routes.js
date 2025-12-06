import express from "express";
import ctrl from "../controllers/payments.controller.js";
import auth from "../middleware/auth.middleware.js";

const r = express.Router();

r.post("/subscribe", auth, ctrl.subscribe);
r.post("/purchase", auth, ctrl.purchase);
r.post("/webhook", ctrl.webhook);

export default r;
 