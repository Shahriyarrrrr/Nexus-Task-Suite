import db from "../db/index.js";

export default {
  async getEvents(req,res,next){
    try{
      const rows = await db.query("SELECT * FROM tasks WHERE user_id=?", [req.user.id]);
      res.json(rows);
    }catch(e){ next(e); }
  },

  async addEvent(req,res,next){
    try{
      const {title,description,status} = req.body;
      await db.query(
        "INSERT INTO tasks (user_id,title,description,status) VALUES (?,?,?,?)",
        [req.user.id,title,description,status]
      );
      res.json({ status:"event_created" });
    }catch(e){ next(e); }
  },

  async removeEvent(req,res,next){
    try{
      await db.query("DELETE FROM tasks WHERE id=? AND user_id=?", [req.params.id,req.user.id]);
      res.json({ status:"event_deleted" });
    }catch(e){ next(e); }
  }
};
