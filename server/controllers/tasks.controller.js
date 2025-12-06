import db from "../db/index.js";

export default {
  async all(req,res,next){
    try{
      const rows = await db.query("SELECT * FROM tasks WHERE user_id=?", [req.user.id]);
      res.json(rows);
    }catch(e){ next(e); }
  },

  async create(req,res,next){
    try{
      const {title,description,status} = req.body;
      await db.query(
        "INSERT INTO tasks (user_id,title,description,status) VALUES (?,?,?,?)",
        [req.user.id,title,description,status]
      );
      res.json({ status:"created" });
    }catch(e){ next(e); }
  },

  async update(req,res,next){
    try{
      const {title,description,status} = req.body;
      await db.query(
        "UPDATE tasks SET title=?, description=?, status=? WHERE id=? AND user_id=?",
        [title,description,status,req.params.id,req.user.id]
      );
      res.json({ status:"updated" });
    }catch(e){ next(e); }
  },

  async remove(req,res,next){
    try{
      await db.query("DELETE FROM tasks WHERE id=? AND user_id=?", [req.params.id,req.user.id]);
      res.json({ status:"deleted" });
    }catch(e){ next(e); }
  }
};
