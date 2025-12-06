const steps=document.querySelectorAll(".step")
const pages=document.querySelectorAll(".step-page")
const nextBtns=document.querySelectorAll(".next-btn")
const prevBtns=document.querySelectorAll(".prev-btn")
const finish=document.getElementById("finishReg")
let current=1

function showStep(n){
pages.forEach(p=>p.classList.add("hidden"))
document.querySelector(`.step-page-${n}`).classList.remove("hidden")
steps.forEach(s=>s.classList.remove("active"))
document.querySelector(`.step[data-step="${n}"]`).classList.add("active")
current=n
}

nextBtns.forEach(b=>{
b.onclick=()=>{
const n=b.dataset.next
showStep(n)
}
})

prevBtns.forEach(b=>{
b.onclick=()=>{
const p=b.dataset.prev
showStep(p)
}
})

const roles=document.querySelectorAll(".role-choice")
let selectedRole="user"

roles.forEach(r=>{
r.onclick=()=>{
roles.forEach(x=>x.classList.remove("active"))
r.classList.add("active")
selectedRole=r.dataset.role
}
})

finish.onclick=()=>{
const name=document.getElementById("regName").value
const email=document.getElementById("regEmail").value
const pass=document.getElementById("regPassword").value
const conf=document.getElementById("regConfirm").value
if(!name||!email||!pass||!conf){
showToast("All fields are required","error")
return
}
if(pass!==conf){
showToast("Passwords do not match","error")
return
}
showToast("Account created as "+selectedRole,"success")
setTimeout(()=>{window.location.href="../02-login/login.html"},1500)
}
