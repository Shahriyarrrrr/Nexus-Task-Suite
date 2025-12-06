import { Auth } from "/client/shared/js/auth.js";

document.querySelectorAll(".x-nav-item").forEach(n=>{
  n.onclick=()=>location.href=n.dataset.link;
});

const themeBtn=document.getElementById("themeToggle");
themeBtn.onclick=()=>{
  const mode=document.body.dataset.theme==="dark"?"light":"dark";
  document.body.dataset.theme=mode;
  localStorage.setItem("nexus_theme",mode);
};

window.addEventListener("load",()=>{
  document.body.dataset.theme=localStorage.getItem("nexus_theme")||"dark";
  const role=Auth.role();
  if(role!=="admin"){
    const admin=document.querySelector('[data-link*="admin.html"]');
    if(admin) admin.style.display="none";
  }
  if(role!=="developer"){
    const dev=document.querySelector('[data-link*="developer.html"]');
    if(dev) dev.style.display="none";
  }
});

const logoutBtn=document.getElementById("logoutBtn");
if(logoutBtn){
  logoutBtn.onclick=()=>{
    Auth.clear();
    location.href="/client/pages/02-login/login.html";
  };
}

const profileLogout=document.getElementById("profileLogout");
if(profileLogout){
  profileLogout.onclick=()=>{
    Auth.clear();
    location.href="/client/pages/02-login/login.html";
  };
}

const notifyBtn=document.getElementById("notifyBtn");
const notifyDropdown=document.getElementById("notifyDropdown");
notifyBtn.onclick=()=>{
  notifyDropdown.style.display=
    notifyDropdown.style.display==="flex"?"none":"flex";
};

const profileBtn=document.getElementById("profileBtn");
const profileDropdown=document.getElementById("profileDropdown");
profileBtn.onclick=()=>{
  profileDropdown.style.display=
    profileDropdown.style.display==="flex"?"none":"flex";
};

document.addEventListener("click",e=>{
  if(!e.target.closest("#profileBtn") && !e.target.closest("#profileDropdown")){
    profileDropdown.style.display="none";
  }
  if(!e.target.closest("#notifyBtn") && !e.target.closest("#notifyDropdown")){
    notifyDropdown.style.display="none";
  }
});

const hamburgerBtn=document.getElementById("hamburgerBtn");
const mobileMenu=document.getElementById("mobileMenu");
hamburgerBtn.onclick=()=>{
  mobileMenu.style.left = mobileMenu.style.left==="0px" ? "-260px" : "0px";
};

document.querySelectorAll(".mm-item").forEach(m=>{
  m.onclick=()=>location.href=m.dataset.link;
});
