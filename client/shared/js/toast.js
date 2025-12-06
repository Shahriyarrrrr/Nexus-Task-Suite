const toastBox=document.getElementById("toastContainer")

function showToast(msg,type){
const t=document.createElement("div")
t.classList.add("toast")
if(type)t.classList.add(type)
t.innerText=msg
toastBox.appendChild(t)
setTimeout(()=>{t.style.opacity=0;t.style.transform="translateX(40px)"},3500)
setTimeout(()=>{t.remove()},4300)
}
