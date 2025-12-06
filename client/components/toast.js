function showToast(msg, type="info"){
  const box = document.getElementById("toastMount");
  if(!box) return;

  const t = document.createElement("div");
  t.classList.add("x-toast");
  t.classList.add("toast-" + type);

  t.innerText = msg;
  box.appendChild(t);

  requestAnimationFrame(()=>{
    t.classList.add("show");
  });

  setTimeout(()=>{
    t.classList.remove("show");
  }, 3000);

  setTimeout(()=>{
    t.remove();
  }, 3600);
}

export { showToast };
