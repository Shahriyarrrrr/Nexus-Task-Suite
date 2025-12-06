import { api } from "/client/shared/js/api-client.js";
const chart1 = document.getElementById("chart1").getContext("2d");
const chart2 = document.getElementById("chart2").getContext("2d");

async function loadData(){
  const tasks = await api.get("/tasks");
  if(tasks?.error) return;
  const totals = {
    todo: 0,
    progress: 0,
    done: 0,
    note: 0
  };
  tasks.forEach(t => {
    totals[t.status] = (totals[t.status] || 0) + 1;
  });

  const labels = ["Todo","In Progress","Done","Notes"];
  const values = [totals.todo, totals.progress, totals.done, totals.note];

  new Chart(chart1, {
    type: "doughnut",
    data: { labels, datasets: [{ data: values }] },
    options: { responsive:true }
  });

  const byDay = {};
  tasks.forEach(t => {
    const d = (t.created_at || "").slice(0,10) || "unknown";
    byDay[d] = (byDay[d] || 0) + 1;
  });
  const dayLabels = Object.keys(byDay).slice(-10);
  const dayValues = dayLabels.map(k => byDay[k]);

  new Chart(chart2, {
    type: "line",
    data: { labels: dayLabels, datasets: [{ label:"Tasks created", data: dayValues, fill:true }] },
    options: { responsive:true }
  });

  document.getElementById("taskCard").innerHTML = `<div class="dash-card-inner"><h4>Total Tasks</h4><div class="dash-stat">${tasks.length}</div></div>`;
  document.getElementById("statsCard").innerHTML = `<div class="dash-card-inner"><h4>Completed</h4><div class="dash-stat">${totals.done}</div></div>`;
  document.getElementById("calendarCard").innerHTML = `<div class="dash-card-inner"><h4>In Progress</h4><div class="dash-stat">${totals.progress}</div></div>`;
  document.getElementById("notesCard").innerHTML = `<div class="dash-card-inner"><h4>Notes</h4><div class="dash-stat">${totals.note}</div></div>`;
}

loadData();
