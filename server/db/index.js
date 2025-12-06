import mysql from "mysql2";

import config from "../config/default.js";

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

export default {
  connect() {
    connection.connect(err => {
      if(err) console.log("DB error", err);
      else console.log("MySQL connected");
    });
  },
  query(sql, params=[]) {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (err, results) => {
        if(err) reject(err);
        else resolve(results);
      });
    });
  }
};
