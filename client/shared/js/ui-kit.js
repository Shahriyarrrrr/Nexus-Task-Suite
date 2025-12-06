window.uiKit = {
  formatDate(d) {
    if(!d) return '';
    const dt = new Date(d);
    const mm = String(dt.getMonth()+1).padStart(2,'0');
    const dd = String(dt.getDate()).padStart(2,'0');
    return `${dt.getFullYear()}-${mm}-${dd}`;
  },
  animateCount(el, from, to, ms=900) {
    const start = performance.now();
    function step(now){
      const p = Math.min(1, (now-start)/ms);
      const v = Math.round(from + (to-from)*p);
      el.innerText = v;
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  },
  showModal(title, content) {
    if(window.openModal) return openModal(title, content);
    const modal = document.querySelector('.x-modal');
    if(!modal) return;
    const titleEl = modal.querySelector('#modalTitle');
    const bodyEl = modal.querySelector('#modalBody');
    titleEl.innerText = title;
    bodyEl.innerHTML = content;
    modal.classList.remove('hidden');
  }
};
