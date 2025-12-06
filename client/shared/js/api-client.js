import { Auth } from "./auth.js";

const API_BASE = "http://localhost:5000";

async function request(method, url, body, isForm = false){
  const token = Auth.getToken();

  const headers = {
    ...(isForm ? {} : { "Content-Type": "application/json" }),
    ...(token ? { "Authorization": "Bearer " + token } : {})
  };

  const options = {
    method,
    headers,
    ...(body ? (isForm ? { body } : { body: JSON.stringify(body) }) : {})
  };

  try{
    const res = await fetch(API_BASE + url, options);
    const text = await res.text().catch(()=>"");
    const data = text ? JSON.parse(text) : null;
    if(!res.ok) return { error: data?.error || data || "Request failed" };
    return data;
  }catch(e){
    return { error: "Network error" };
  }
}

export const api = {
  get: (url) => request("GET", url),
  post: (url, body) => request("POST", url, body),
  put: (url, body) => request("PUT", url, body),
  del: (url) => request("DELETE", url),
  postForm: (url, formData) => request("POST", url, formData, true)
};
