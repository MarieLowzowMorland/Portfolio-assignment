import addHeaderForPage, { pageNames, eksternalLinks } from "../templates/header.js";

addHeaderForPage(pageNames.Innovation_Coach);
document.getElementById("main")
  .insertAdjacentHTML("afterbegin", eksternalLinks(pageNames.Innovation_Coach));