export const Auth = {
  getToken(){
    return localStorage.getItem("token");
  },

  getUser(){
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  },

  saveSession(token, user){
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  },

  clear(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  isLoggedIn(){
    return !!this.getToken();
  },

  role(){
    const u = this.getUser();
    return u ? u.role : null;
  }
};
