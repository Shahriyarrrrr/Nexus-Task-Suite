document.querySelectorAll(".faq-q").forEach(q=>{
q.onclick=()=>{
const p=q.parentElement
p.classList.toggle("open")
}
})
const send=document.getElementById("sendTicket")
send.onclick=()=>{
const e=document.getElementById("supportEmail").value
const m=document.getElementById("supportMsg").value
if(!e||!m){ showToast("Please fill both fields","warn"); return }
showToast("Ticket submitted","success")
document.getElementById("supportEmail").value=""
document.getElementById("supportMsg").value=""
}
