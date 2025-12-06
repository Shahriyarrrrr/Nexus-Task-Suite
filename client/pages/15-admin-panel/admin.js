import { api } from "/client/shared/js/api-client.js";
import { showToast } from "/client/components/toast.js";

const userTable = document.getElementById("userTable");

async function loadUsers(){
  const res = await api.get("/users");
  if(res?.error) { userTable.innerHTML = "Cannot load users"; return; }
  userTable.innerHTML = "";
  res.forEach(u => {
    const row = document.createElement("div");
    row.className = "user-row";
    row.innerHTML = `
      <div class="u-name">${u.name}</div>
      <div class="u-email">${u.email}</div>
      <div class="u-role"><select class="role-select"><option value="user">user</option><option value="admin">admin</option><option value="developer">developer</option></select></div>
      <div class="u-actions"><button class="del">Delete</button></div>
    `;
    const sel = row.querySelector(".role-select");
    sel.value = u.role;
    sel.onchange = async () => {
      const newRole = sel.value;
      const r = await api.put("/users/" + u.id, { name: u.name, role: newRole });
      if(r?.error) showToast("Update failed","error"); else showToast("Updated","success");
      await loadUsers();
    };
    row.querySelector(".del").onclick = async () => {
      if(!confirm("Delete user?")) return;
      const d = await api.del("/users/" + u.id);
      if(d?.error) showToast("Delete failed","error"); else { showToast("Deleted","success"); loadUsers(); }
    };
    userTable.appendChild(row);
  });
}

document.getElementById("createUser")?.addEventListener("click", async ()=>{
  const name = prompt("Name");
  const email = prompt("Email");
  const pass = prompt("Password");
  const role = prompt("Role (user/admin/developer)", "user");
  if(!email||!pass||!name) return;
  const r = await api.post("/auth/register", { name, email, password: pass, role });
  if(r?.error) showToast("Create failed","error"); else { showToast("Created","success"); loadUsers(); }
});

loadUsers();
