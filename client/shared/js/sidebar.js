const sidebar=document.getElementById("sidebar")
const toggle=document.getElementById("toggleSidebar")
const links=document.querySelectorAll(".sidebar-menu li")

toggle.onclick=()=>{
sidebar.classList.toggle("open")
}

links.forEach(i=>{
i.onclick=()=>{
const p=i.getAttribute("data-page")
parent.location.href=p
}
})
