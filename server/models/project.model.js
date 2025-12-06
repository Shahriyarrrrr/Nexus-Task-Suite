import db from "../db/index.js";

export default {
  all(owner_id){
    return db.query("SELECT * FROM projects WHERE owner_id=?", [owner_id]);
  },
  create(name,owner_id){
    return db.query(
      "INSERT INTO projects (name,owner_id) VALUES (?,?)",
      [name,owner_id]
    );
  },
  remove(id,owner_id){
    return db.query("DELETE FROM projects WHERE id=? AND owner_id=?", [id,owner_id]);
  }
};
