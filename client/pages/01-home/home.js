const startBtn=document.getElementById("getStartedBtn")
const learnBtn=document.getElementById("learnMoreBtn")
startBtn.onclick=()=>{window.location.href="../02-login/login.html"}
learnBtn.onclick=()=>{document.querySelector(".features-grid").scrollIntoView({behavior:"smooth"})}
window.onload=()=>{document.body.style.opacity=1}
