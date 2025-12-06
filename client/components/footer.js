document.querySelectorAll(".f-link").forEach(l=>{
l.onclick=()=>location.href=l.dataset.link
})

document.querySelectorAll(".f-social").forEach(s=>{
s.onclick=()=>window.open(s.dataset.url,"_blank")
})
