const grid=document.getElementById("teamGrid")
const email=document.getElementById("inviteEmail")
const invite=document.getElementById("inviteBtn")

let members=[
{name:"Shahriyar",role:"Developer"},
{name:"Afsana",role:"UI Designer"},
{name:"Karim",role:"Project Manager"}
]

function renderMembers(){
grid.innerHTML=""
members.forEach(m=>{
const div=document.createElement("div")
div.classList.add("member-card")
div.innerHTML=`
<div class='member-img'></div>
<div class='member-name'>${m.name}</div>
<div class='member-role'>${m.role}</div>
`
grid.appendChild(div)
})
}

invite.onclick=()=>{
if(email.value.trim()===""){
showToast("Enter an email","warn")
return
}
showToast("Invite sent to "+email.value,"success")
email.value=""
}

renderMembers()
