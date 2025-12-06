const loginBtn=document.getElementById("headerLoginBtn")
const registerBtn=document.getElementById("headerRegisterBtn")
const themeBtn=document.getElementById("themeToggle")

loginBtn.onclick=()=>{window.location.href="../02-login/login.html"}
registerBtn.onclick=()=>{window.location.href="../03-register/register.html"}

themeBtn.onclick=()=>{
if(document.body.dataset.theme==="light"){
document.body.dataset.theme="dark"
document.documentElement.style.setProperty("--primary","#6c5ce7")
document.documentElement.style.setProperty("--secondary","#00cec9")
document.documentElement.style.setProperty("--text","#dfe6e9")
} else {
document.body.dataset.theme="light"
document.documentElement.style.setProperty("--primary","#4c3fc7")
document.documentElement.style.setProperty("--secondary","#009aa5")
document.documentElement.style.setProperty("--text","#1e1e2f")
}
}
