import db from "../db/index.js";

export default {
  async subscribe(req,res,next){
    try{
      const amount = 9.99;
      await db.query(
        "INSERT INTO payments (user_id,amount,status) VALUES (?,?,?)",
        [req.user.id,amount,"subscribed"]
      );
      res.json({ status:"subscribed" });
    }catch(e){ next(e); }
  },

  async purchase(req,res,next){
    try{
      const amount = 4.99;
      await db.query(
        "INSERT INTO payments (user_id,amount,status) VALUES (?,?,?)",
        [req.user.id,amount,"purchased"]
      );
      res.json({ status:"purchased" });
    }catch(e){ next(e); }
  },

  async webhook(req,res,next){
    try{
      res.json({ status:"ok" });
    }catch(e){ next(e); }
  }
};
