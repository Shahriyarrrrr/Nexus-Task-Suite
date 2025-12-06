import { api } from "/client/shared/js/api-client.js";
import { showToast } from "/client/components/toast.js";

const calendarGrid = document.getElementById("calendarGrid");
const monthLabel = document.getElementById("monthLabel");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

let viewDate = new Date();

function startOfMonth(d){
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function daysInMonth(d){
  return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
}

function formatDate(d){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const day = String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}

async function loadEvents(){
  const res = await api.get("/calendar");
  if(res?.error) return [];
  return res;
}

async function render(){
  calendarGrid.innerHTML = "";
  const first = startOfMonth(viewDate);
  monthLabel.textContent = first.toLocaleString(undefined,{month:"long", year:"numeric"});
  const total = daysInMonth(viewDate);
  const events = await loadEvents();

  for(let i=1;i<=total;i++){
    const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), i);
    const el = document.createElement("div");
    el.className = "cal-day";
    el.dataset.date = formatDate(d);
    el.innerHTML = `<div class="cal-number">${i}</div><div class="cal-events"></div>`;
    calendarGrid.appendChild(el);

    const dayEvents = events.filter(ev => {
      const evDate = ev.due_date || ev.date || ev.created_at || null;
      if(!evDate) return false;
      return evDate.startsWith(formatDate(d));
    });

    const container = el.querySelector(".cal-events");
    dayEvents.forEach(e => {
      const item = document.createElement("div");
      item.className = "cal-event";
      item.textContent = e.title || "Untitled";
      item.onclick = (ev) => {
        ev.stopPropagation();
        if(confirm("Delete this event?")) removeEvent(e.id);
      };
      container.appendChild(item);
    });

    el.onclick = () => createEventPrompt(formatDate(d));
  }
}

async function createEventPrompt(dateStr){
  const title = prompt("New event title for " + dateStr);
  if(!title) return;
  const res = await api.post("/calendar", { title, description: title, status: "todo", date: dateStr });
  if(res?.error){ showToast("Failed to create", "error"); return; }
  showToast("Event created", "success");
  await render();
}

async function removeEvent(id){
  const res = await api.del(`/calendar/${id}`);
  if(res?.error){ showToast("Failed", "error"); return; }
  showToast("Deleted", "success");
  await render();
}

prevBtn.onclick = () => { viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()-1, 1); render(); };
nextBtn.onclick = () => { viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()+1, 1); render(); };

render();
