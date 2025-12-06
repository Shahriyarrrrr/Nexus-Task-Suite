import fetch from "node-fetch";
import config from "../config/default.js";

const STRIPE_KEY = process.env.STRIPE_KEY || "";

async function stripeCharge(amount, token, metadata = {}){
  if(!STRIPE_KEY) return { status:"skipped", message:"stripe key not configured" };
  const body = new URLSearchParams();
  body.append("amount", Math.round(amount * 100));
  body.append("currency", "usd");
  body.append("source", token);
  Object.entries(metadata).forEach(([k,v])=>body.append(`metadata[${k}]`, String(v)));
  const res = await fetch("https://api.stripe.com/v1/charges", {
    method:"POST",
    body,
    headers: { Authorization: `Bearer ${STRIPE_KEY}` }
  });
  const j = await res.json();
  return j;
}

export default {
  async subscribe(userId, planId){
    if(!STRIPE_KEY) return { status:"ok", provider:"stub", plan:planId, user:userId };
    return { status:"unsupported", provider:"stripe" };
  },

  async purchase(userId, amount, token){
    const r = await stripeCharge(amount, token, { userId });
    return r;
  },

  async webhookHandler(payload, headers){
    return { received:true };
  }
};
