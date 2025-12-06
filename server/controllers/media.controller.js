import db from "../db/index.js";

export default {
  async all(req,res,next){
    try{
      const rows = await db.query("SELECT * FROM media WHERE user_id=?", [req.user.id]);
      res.json(rows);
    }catch(e){ next(e); }
  },

  async upload(req,res,next){
    try{
      const {type,file_path} = req.body;
      await db.query(
        "INSERT INTO media (user_id,type,file_path) VALUES (?,?,?)",
        [req.user.id,type,file_path]
      );
      res.json({ status:"uploaded" });
    }catch(e){ next(e); }
  },

  async remove(req,res,next){
    try{
      await db.query("DELETE FROM media WHERE id=? AND user_id=?", [req.params.id,req.user.id]);
      res.json({ status:"deleted" });
    }catch(e){ next(e); }
  }
};
