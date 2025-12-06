export default {
  email(v){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  },
  password(v){
    return typeof v === "string" && v.length >= 6;
  },
  text(v){
    return typeof v === "string" && v.trim().length > 0;
  }
};
