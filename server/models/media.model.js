import db from "../db/index.js";

export default {
  all(user_id){
    return db.query("SELECT * FROM media WHERE user_id=?", [user_id]);
  },
  create(user_id,type,file_path){
    return db.query(
      "INSERT INTO media (user_id,type,file_path) VALUES (?,?,?)",
      [user_id,type,file_path]
    );
  },
  remove(id,user_id){
    return db.query("DELETE FROM media WHERE id=? AND user_id=?", [id,user_id]);
  }
};
