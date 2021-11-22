// Imports
import "@fortawesome/fontawesome-free/js/all";

import "reset-css";
import "./style.css";

import { addHomeHtml } from "./pages/home";
import { addMenuHtml } from "./pages/menu";
import { addContactHtml } from "./pages/contact";

// Site header region
const header = document.createElement("header");
header.classList.add("site-header");

const pageTitle = document.createElement("h1");
pageTitle.classList.add("site-title");
pageTitle.textContent = "Friends and Phos";
header.appendChild(pageTitle);

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
header.appendChild(mainNav);

const navUl = document.createElement("ul");
mainNav.appendChild(navUl);

const navLinks = ["home", "menu", "contact"];
navLinks.forEach((link, index) => {
  const listItem = document.createElement("li");
  const linkTag = document.createElement("a");

  linkTag.textContent = link;
  linkTag.setAttribute("href", `#`);
  linkTag.dataset.content = link;
  linkTag.addEventListener("click", handleMenuClick);

  if (index === 0) linkTag.classList.add("active");

  listItem.appendChild(linkTag);
  navUl.appendChild(listItem);
});

// Main content section
const main = document.createElement("main");
main.classList.add("main-content");

// Site footer section
const footer = document.createElement("footer");
footer.classList.add("site-footer");
footer.innerHTML = `
  <p>Copyright © ${new Date().getFullYear()}. All rights reserved.</p>
`;

// Insert elements into the DOM
document.body.insertAdjacentElement("beforeend", header);
document.body.insertAdjacentElement("beforeend", main);
document.body.insertAdjacentElement("beforeend", footer);

// Elements
const menuLinks = document.querySelectorAll(".main-navigation a");

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

// Init
addHomeHtml(main);
