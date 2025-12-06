import { api } from "/client/shared/js/api-client.js";
import { Auth } from "/client/shared/js/auth.js";
import { showToast } from "/client/components/toast.js";

const regenBtn = document.getElementById("regenKey");
const keyBox = document.getElementById("keyBox");

async function refreshToken(){
  const token = Auth.getToken();
  if(!token) return;
  const r = await api.post("/auth/refresh", { token });
  if(r?.token){
    Auth.saveSession(r.token, r.user);
    showToast("Token refreshed","success");
  }
}

regenBtn.onclick = async () => {
  const user = Auth.getUser();
  if(!user) return showToast("Not logged in","error");

  const res = await api.post("/users/" + user.id + "/regen-key", {});

  if(res?.error){
    // fallback: generate locally and show (client-side simulated key)
    const simulated = "sk_sim_" + Math.random().toString(36).slice(2,18);
    keyBox.innerHTML = `<div class="key">${simulated}</div>`;
    showToast("Simulated key generated (backend endpoint not available)", "warn");
    return;
  }

  keyBox.innerHTML = `<div class="key">${res.key || "no-key-returned"}</div>`;
  showToast("Key regenerated", "success");
};

document.getElementById("sendWebhook")?.addEventListener("click", async ()=>{
  const url = document.getElementById("webhookUrl").value;
  if(!url) return showToast("Enter webhook url","warn");
  const r = await api.post("/developer/webhook-test", { url });
  if(r?.error) showToast("Send failed","error"); else showToast("Sent","success");
});
