

import {navContact, navSocial, planPrice, aboutYear} from "./script.js";











const sidebar = document.querySelector(".sidebar");

const sidebarLogo = document.querySelector(".sidebar-logo");

const body2 = document.querySelector(".body-2");

sidebarLogo?.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  body2.classList.toggle("open");
})





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

