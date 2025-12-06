(function(){
  window.onEvent = (name, detail) => {
    const ev = new CustomEvent(name, { detail });
    window.dispatchEvent(ev);
  };
  window.listen = (name, fn) => window.addEventListener(name, (e)=>fn(e.detail));
})();
