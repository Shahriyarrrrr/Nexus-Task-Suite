import emails from "../utils/emails.js";

export default {
  async sendEmail(to, subject, html){
    try{
      const r = await emails.send(to, subject, html);
      return { ok:true, result:r };
    }catch(e){
      return { ok:false, error: e && e.message ? e.message : String(e) };
    }
  },

  async sendUserWelcome(user){
    const html = `<div><h3>Welcome ${user.name}</h3><p>Your account is ready.</p></div>`;
    return this.sendEmail(user.email, "Welcome to Nexus Task Suite", html);
  }
};
