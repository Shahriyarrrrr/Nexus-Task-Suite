export function enableDragElement(el){
  el.draggable = true;
  el.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", el.dataset.id || "");
  });
}

export function makeDropZone(zone, ondrop){
  zone.addEventListener("dragover", e => e.preventDefault());
  zone.addEventListener("drop", e => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    ondrop(id, zone);
  });
}
