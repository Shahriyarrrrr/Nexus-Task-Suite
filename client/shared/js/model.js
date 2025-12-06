const modalOverlay=document.getElementById("modalOverlay")
const modalBox=document.getElementById("modalBox")
const modalContent=document.getElementById("modalContent")
const modalClose=document.getElementById("modalClose")

function openModal(html){
modalContent.innerHTML=html
modalOverlay.classList.add("active")
}

function closeModal(){
modalOverlay.classList.remove("active")
modalContent.innerHTML=""
}

modalClose.onclick=closeModal
modalOverlay.onclick=e=>{
if(e.target===modalOverlay) closeModal()
}
