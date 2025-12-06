import { Tasks } from "/client/shared/js/task-service.js";

const todoList = document.getElementById("todoList");
const progressList = document.getElementById("progressList");
const doneList = document.getElementById("doneList");

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");

let draggedId = null;

async function loadTasks(){
  const data = await Tasks.list();
  if(data.error) return;

  todoList.innerHTML = "";
  progressList.innerHTML = "";
  doneList.innerHTML = "";

  data.forEach(t => {
    const el = document.createElement("div");
    el.className = "task-card";
    el.textContent = t.title;
    el.draggable = true;
    el.dataset.id = t.id;
    el.dataset.status = t.status;

    el.ondragstart = () => draggedId = t.id;

    if(t.status === "todo") todoList.appendChild(el);
    if(t.status === "progress") progressList.appendChild(el);
    if(t.status === "done") doneList.appendChild(el);
  });
}

document.querySelectorAll(".kanban-list").forEach(list => {
  list.ondragover = e => e.preventDefault();

  list.ondrop = async (e) => {
    const newStatus = list.dataset.col;

    if(!draggedId) return;

    await Tasks.update(draggedId, { status: newStatus });

    draggedId = null;

    await loadTasks();
  };
});

addBtn.onclick = async () => {
  const title = input.value.trim();
  if(!title) return;

  await Tasks.create(title);
  await loadTasks();

  input.value = "";
};

loadTasks();
