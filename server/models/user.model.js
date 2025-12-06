import db from "../db/index.js";

export default {
  all(){
    return db.query("SELECT id,name,email,role,created_at FROM users");
  },
  find(id){
    return db.query("SELECT * FROM users WHERE id=?", [id]);
  },
  findByEmail(email){
    return db.query("SELECT * FROM users WHERE email=?", [email]);
  },
  create(name,email,password,role){
    return db.query(
      "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
      [name,email,password,role]
    );
  },
  update(id,name,role){
    return db.query("UPDATE users SET name=?, role=? WHERE id=?", [name,role,id]);
  },
  remove(id){
    return db.query("DELETE FROM users WHERE id=?", [id]);
  }
};
