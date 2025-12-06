import { api } from "/client/shared/js/api-client.js";
import { showToast } from "/client/components/toast.js";

const subscribeBtn = document.getElementById("subscribeBtn");
const payBtn = document.getElementById("payBtn");

subscribeBtn.onclick = async () => {
  subscribeBtn.disabled = true;
  const res = await api.post("/payments/subscribe");
  subscribeBtn.disabled = false;
  if(res?.url){
    window.location.href = res.url;
  } else if(res?.error){
    showToast("Subscribe failed", "error");
  } else {
    showToast("Subscription created (stub)", "success");
  }
};

payBtn.onclick = async () => {
  payBtn.disabled = true;
  const res = await api.post("/payments/purchase");
  payBtn.disabled = false;
  if(res?.url){
    window.location.href = res.url;
  } else if(res?.error){
    showToast("Payment failed", "error");
  } else {
    showToast("Payment created (stub)", "success");
  }
};
