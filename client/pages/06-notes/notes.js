import { Tasks } from "/client/shared/js/task-service.js";
import { showToast } from "/client/components/toast.js";

const list = document.getElementById("notesList");
const area = document.getElementById("noteArea");
const saveBtn = document.getElementById("saveNote");
const deleteBtn = document.getElementById("deleteNote");

let currentId = null;
let autosaveTimer = null;

async function loadNotes(){
  const data = await Tasks.list();
  if(data.error) return;
  list.innerHTML = "";
  data.filter(n => n.status === "note").forEach(n => {
    const el = document.createElement("div");
    el.className = "note-item";
    el.textContent = n.title || (n.description || "").slice(0,40);
    el.dataset.id = n.id;
    el.onclick = () => {
      currentId = n.id;
      area.value = n.description || "";
    };
    list.appendChild(el);
  });
}

saveBtn.onclick = async () => {
  const text = area.value.trim();
  if(!text) return;
  if(currentId){
    await Tasks.update(currentId, { title: text.slice(0,40), description: text, status: "note" });
    showToast("Saved note", "success");
  } else {
    await Tasks.create(text.slice(0,40), text, "note");
    showToast("Created note", "success");
  }
  currentId = null;
  area.value = "";
  await loadNotes();
};

deleteBtn.onclick = async () => {
  if(!currentId) return;
  await Tasks.delete(currentId);
  currentId = null;
  area.value = "";
  await loadNotes();
};

area.addEventListener("input", () => {
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(async () => {
    if(area.value.trim() === "") return;
    if(currentId){
      await Tasks.update(currentId, { title: area.value.slice(0,40), description: area.value, status: "note" });
    } else {
      const created = await Tasks.create(area.value.slice(0,40), area.value, "note");
      await loadNotes();
    }
    showToast("Auto-saved", "success");
  }, 3500);
});

loadNotes();
