import bcrypt from "bcryptjs";

export default {
  hash(v){
    return bcrypt.hash(v,10);
  },
  compare(v,h){
    return bcrypt.compare(v,h);
  }
};
