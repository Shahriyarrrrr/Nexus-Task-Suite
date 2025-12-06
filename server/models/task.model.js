import db from "../db/index.js";

export default {
  all(user_id){
    return db.query("SELECT * FROM tasks WHERE user_id=?", [user_id]);
  },
  find(id,user_id){
    return db.query("SELECT * FROM tasks WHERE id=? AND user_id=?", [id,user_id]);
  },
  create(user_id,title,description,status){
    return db.query(
      "INSERT INTO tasks (user_id,title,description,status) VALUES (?,?,?,?)",
      [user_id,title,description,status]
    );
  },
  update(id,user_id,title,description,status){
    return db.query(
      "UPDATE tasks SET title=?, description=?, status=? WHERE id=? AND user_id=?",
      [title,description,status,id,user_id]
    );
  },
  remove(id,user_id){
    return db.query("DELETE FROM tasks WHERE id=? AND user_id=?", [id,user_id]);
  }
};
