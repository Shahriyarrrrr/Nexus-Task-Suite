import db from "../db/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/default.js";

function token(u){
  return jwt.sign({ id:u.id, role:u.role }, config.jwt_secret, { expiresIn:config.jwt_expire });
}

export default {
  async register(req,res,next){
    try{
      const {name,email,password,role} = req.body;
      const hash = await bcrypt.hash(password,10);
      const q = "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)";
      await db.query(q,[name,email,hash,role]);
      const u = await db.query("SELECT * FROM users WHERE email=?",[email]);
      const t = token(u[0]);
      res.json({ token:t, user:u[0] });
    }catch(e){ next(e); }
  },

  async login(req,res,next){
    try{
      const {email,password} = req.body;
      const q = "SELECT * FROM users WHERE email=?";
      const rows = await db.query(q,[email]);
      if(!rows.length) return res.status(401).json({error:"Invalid credentials"});
      const user = rows[0];
      const ok = await bcrypt.compare(password,user.password);
      if(!ok) return res.status(401).json({error:"Invalid credentials"});
      const t = token(user);
      res.json({ token:t, user });
    }catch(e){ next(e); }
  },

  async refresh(req,res,next){
    try{
      const {token:old} = req.body;
      const d = jwt.verify(old, config.jwt_secret);
      const rows = await db.query("SELECT * FROM users WHERE id=?",[d.id]);
      const u = rows[0];
      const t = token(u);
      res.json({ token:t, user:u });
    }catch(e){ next(e); }
  }
};
