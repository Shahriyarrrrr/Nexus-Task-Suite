import { Auth } from "./auth.js";

const publicPages = [
  "/client/pages/01-home/home.html",
  "/client/pages/02-login/login.html",
  "/client/pages/03-register/register.html"
];

const rolePages = {
  admin: [
    "/client/pages/15-admin-panel/admin.html"
  ],
  developer: [
    "/client/pages/16-developer-portal/developer.html"
  ]
};

export function routeGuard(){
  const path = window.location.pathname.replace(/\\/g, "/");

  const loggedIn = Auth.isLoggedIn();
  const role = Auth.role();

  if(!loggedIn){
    if(!publicPages.includes(path)){
      window.location.href = "/client/pages/02-login/login.html";
    }
    return;
  }

  if(path.includes("admin.html") && role !== "admin"){
    window.location.href = "/client/pages/04-dashboard/dashboard.html";
    return;
  }

  if(path.includes("developer.html") && role !== "developer"){
    window.location.href = "/client/pages/04-dashboard/dashboard.html";
    return;
  }

  if(path.includes("login.html") || path.includes("register.html")){
    window.location.href = "/client/pages/04-dashboard/dashboard.html";
    return;
  }
}
