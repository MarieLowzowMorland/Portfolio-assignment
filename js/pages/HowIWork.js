import addHeaderForPage, { pageNames, eksternalLinks } from "../templates/header.js";

addHeaderForPage(pageNames.How_I_work);
document.getElementById("main")
  .insertAdjacentHTML("afterbegin", eksternalLinks(pageNames.How_I_work));