import db from "../db/index.js";

export default {
  async all(req,res,next){
    try{
      const rows = await db.query("SELECT id,name,email,role,created_at FROM users");
      res.json(rows);
    }catch(e){ next(e); }
  },

  async one(req,res,next){
    try{
      const rows = await db.query("SELECT id,name,email,role,created_at FROM users WHERE id=?", [req.params.id]);
      res.json(rows[0]||null);
    }catch(e){ next(e); }
  },

  async update(req,res,next){
    try{
      const {name,role} = req.body;
      await db.query("UPDATE users SET name=?, role=? WHERE id=?", [name,role,req.params.id]);
      res.json({ status:"updated" });
    }catch(e){ next(e); }
  },

  async remove(req,res,next){
    try{
      await db.query("DELETE FROM users WHERE id=?", [req.params.id]);
      res.json({ status:"deleted" });
    }catch(e){ next(e); }
  }
};
