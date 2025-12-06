import { routeGuard } from "./route-guard.js";
routeGuard();

async function loadComponent(target,file){
  const mount=document.querySelector(target);
  if(!mount) return;
  const res=await fetch(`/client/components/${file}`);
  const html=await res.text();
  mount.innerHTML=html;
}

async function injectAsset(href,rel="stylesheet"){
  return new Promise((resolve)=>{
    if(rel==="stylesheet"){
      const l=document.createElement("link");
      l.rel="stylesheet";
      l.href=href;
      document.head.appendChild(l);
      l.onload=()=>resolve();
      l.onerror=()=>resolve();
    } else {
      const s=document.createElement("script");
      s.src=href;
      s.defer=true;
      document.body.appendChild(s);
      s.onload=()=>resolve();
      s.onerror=()=>resolve();
    }
  });
}

async function initUI(){
  await loadComponent("#headerMount","header.html");
  await loadComponent("#sidebarMount","sidebar.html");
  await loadComponent("#modalMount","modal.html");
  await loadComponent("#toastMount","toast.html");
  await loadComponent("#footerMount","footer.html");
  await injectAsset("/client/components/header.js","script");
  await injectAsset("/client/components/sidebar.js","script");
  await injectAsset("/client/components/modal.js","script");
  await injectAsset("/client/components/toast.js","script");
  await injectAsset("/client/components/footer.js","script");
  await injectAsset("/client/shared/css/interaction.css","stylesheet");
  await injectAsset("/client/shared/js/interaction.js","script");
  const savedTheme=localStorage.getItem("nexus_theme");
  if(savedTheme) document.body.dataset.theme=savedTheme;
}

document.addEventListener("DOMContentLoaded",initUI);

import { UISounds } from "./ui-sounds.js";

document.addEventListener("click", e => {
  if (e.target.matches("button, .btn, .nav-item")) UISounds.click();
});
