import addHeaderForPage, { pageNames, eksternalLinks } from "../templates/header.js";

addHeaderForPage(pageNames.Rainydays);
document.getElementById("main")
  .insertAdjacentHTML("afterbegin", eksternalLinks(pageNames.Rainydays));