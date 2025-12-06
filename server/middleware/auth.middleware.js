import jwt from "jsonwebtoken";
import config from "../config/default.js";
import db from "../db/index.js";

export default async function(req,res,next){
  try{
    const h = req.headers.authorization || "";
    const t = h.startsWith("Bearer ") ? h.slice(7) : null;
    if(!t) return res.status(401).json({error:"Unauthorized"});
    const d = jwt.verify(t, config.jwt_secret);
    const rows = await db.query("SELECT * FROM users WHERE id=?", [d.id]);
    if(!rows.length) return res.status(401).json({error:"Unauthorized"});
    req.user = rows[0];
    next();
  }catch(e){
    res.status(401).json({error:"Unauthorized"});
  }
}
