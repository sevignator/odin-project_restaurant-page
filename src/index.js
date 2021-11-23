// Imports
import "@fortawesome/fontawesome-free/js/all";

import "reset-css";
import "./style.css";

import { addHomeHtml } from "./pages/home";
import { addMenuHtml } from "./pages/menu";
import { addContactHtml } from "./pages/contact";

// Site header region
const header = document.createElement("header");
const navLinks = ["home", "menu", "contact"];
header.classList.add("site-header");
header.innerHTML = `
  <h1 class="site-title">Friends and Phos</h1>
  <nav class="main-navigation">
    <ul>
      ${navLinks
        .map((link, index) => {
          return `<li><a href="#" data-content="${link}" ${
            index === 0 ? 'class="active"' : ""
          }>${link}</a></li>`;
        })
        .join("")}
    </ul>
  </nav>
`;

// Main content region
const main = document.createElement("main");
main.classList.add("main-content");

// Site footer region
const footer = document.createElement("footer");
footer.classList.add("site-footer");
footer.innerHTML = `Copyright © ${new Date().getFullYear()}. All rights reserved.`;

// Insert regions into the DOM
document.body.insertAdjacentElement("beforeend", header);
document.body.insertAdjacentElement("beforeend", main);
document.body.insertAdjacentElement("beforeend", footer);

// Elements
const menuLinks = document.querySelectorAll(".main-navigation a");
menuLinks.forEach((link) => link.addEventListener("click", handleMenuClick));

// Functions
function handleMenuClick(e) {
  e.preventDefault();

  menuLinks.forEach((element) => element.classList.remove("active"));
  e.target.classList.add("active");

  switch (e.target.dataset.content) {
    case "home":
      addHomeHtml(main);
      break;
    case "menu":
      addMenuHtml(main);
      break;
    case "contact":
      addContactHtml(main);
      break;
  }
}

// Initialize
addHomeHtml(main);
