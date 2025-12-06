import { Auth } from "/client/shared/js/auth.js";
import { api } from "/client/shared/js/api-client.js";
import { showToast } from "/client/components/toast.js";

const roleBtns = document.querySelectorAll(".role-btn");
let currentRole = "user";

roleBtns.forEach(b => {
  b.onclick = () => {
    roleBtns.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    currentRole = b.dataset.role;
  };
});

const submit = document.getElementById("loginSubmit");

submit.onclick = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email.trim() === "" || pass.trim() === "") {
    showToast("Please enter your email and password", "error");
    return;
  }

  showToast("Authenticating...", "success");

  try {
    const res = await api.post("/auth/login", {
      email,
      password: pass,
      role: currentRole
    });

    if (!res || !res.token) {
      showToast("Invalid login information", "error");
      return;
    }

    Auth.saveSession(res.token, res.user);

    showToast("Welcome " + res.user.role, "success");

    setTimeout(() => {
      if (res.user.role === "admin") {
        window.location.href = "/client/pages/15-admin-panel/admin.html";
      } else if (res.user.role === "developer") {
        window.location.href = "/client/pages/16-developer-portal/developer.html";
      } else {
        window.location.href = "/client/pages/04-dashboard/dashboard.html";
      }
    }, 800);

  } catch (err) {
    console.error(err);
    showToast("Login failed. Try again.", "error");
  }
};
