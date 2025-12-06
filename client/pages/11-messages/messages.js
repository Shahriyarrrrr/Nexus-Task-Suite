const list=document.getElementById("msgList")
const input=document.getElementById("msgInput")
const send=document.getElementById("msgSend")

send.onclick=()=>{
if(input.value.trim()===""){
showToast("Type a message","warn")
return
}
const div=document.createElement("div")
div.classList.add("msg-item")
div.innerText=input.value
list.appendChild(div)
list.scrollTop=list.scrollHeight
input.value=""
}
