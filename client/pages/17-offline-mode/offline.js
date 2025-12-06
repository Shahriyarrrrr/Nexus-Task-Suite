const retry=document.getElementById("retryBtn")
const work=document.getElementById("workOffline")
retry.onclick=()=>{
if(navigator.onLine){ showToast("Connection restored","success"); setTimeout(()=>location.reload(),700) } else { showToast("Still offline","warn") }
}
work.onclick=()=>{ showToast("Switched to offline mode","success") }
window.addEventListener("online",()=>{ showToast("Back online","success") })
window.addEventListener("offline",()=>{ showToast("You are offline","warn") })
