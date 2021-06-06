import addHeaderForPage, { pageNames, eksternalLinks } from "../templates/header.js";

addHeaderForPage(pageNames.Community_Sience_Museum);
document.getElementById("main")
  .insertAdjacentHTML("afterbegin", eksternalLinks(pageNames.Community_Sience_Museum));