const themeBtns=document.querySelectorAll(".theme-btn")
const layoutBtns=document.querySelectorAll(".layout-btn")
const notify=document.getElementById("notifyToggle")
themeBtns.forEach(b=>b.onclick=()=>{
themeBtns.forEach(x=>x.classList.remove("active"))
b.classList.add("active")
localStorage.setItem("nexus_theme",b.dataset.theme)
})
layoutBtns.forEach(b=>b.onclick=()=>{
layoutBtns.forEach(x=>x.classList.remove("active"))
b.classList.add("active")
localStorage.setItem("nexus_layout",b.dataset.layout)
})
notify.onchange=()=>{showToast("Notifications "+(notify.checked?"enabled":"disabled"),"success")}
window.addEventListener("load",()=>{
const t=localStorage.getItem("nexus_theme")
if(t) document.querySelector(`.theme-btn[data-theme="${t}"]`)?.classList.add("active")
const l=localStorage.getItem("nexus_layout")
if(l) document.querySelector(`.layout-btn[data-layout="${l}"]`)?.classList.add("active")
})
