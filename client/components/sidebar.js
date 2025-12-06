import { Auth } from "/client/shared/js/auth.js";

const role = Auth.role();

if(role !== "admin"){
  document.querySelector('[data-nav="admin"]').style.display = "none";
}

if(role !== "developer"){
  document.querySelector('[data-nav="developer"]').style.display = "none";
}

document.querySelectorAll(".x-side-item").forEach(i=>{
i.onclick=()=>location.href=i.dataset.link
})

const current=location.pathname
document.querySelectorAll(".x-side-item").forEach(i=>{
if(i.dataset.link && current.includes(i.dataset.link.replace("/client","")))
i.classList.add("active")
})
