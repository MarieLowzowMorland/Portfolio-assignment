import { Logo, HamburgerMenu, GoTo, Github } from "../templates/svgIcons.js";

export const pageNames = {
  HOME: {
    name: "Home",
    url: "index.html",
  },
  How_I_work: {
    name: "How I work",
    url: "howIWork.html",
    header: `<em>My process</em>
    How I design, test and develop.
    And a little about my main focus`,
    description: "How I have worked",
    githubUrl: "https://github.com/MarieLowzowMorland/Portfolio-assignment"
  },
  Innovation_Coach: {
    name: "Innovation Coach",
    url: "innovationCoach.html",
    header: `<em>A blog about innovation</em>
    and my playground for accessibility and user testing.`,
    description: "Blog - Innovation Coach",
    siteUrl: "https://innovationcoach.netlify.app/",
    githubUrl: "https://github.com/MarieLowzowMorland/Innovation-coach--project-exam-1"
  },
  Community_Sience_Museum: {
    name: "Community Sience Museum",
    url: "communityScienceMuseum.html",
    header: `<em>Promotion for a Community Science Museum</em>
    with kids and teenagers as main user group.`,
    description: "Community Sience Museum",
    siteUrl: "https://csiencemuseum.netlify.app/",
    githubUrl: "https://github.com/MarieLowzowMorland/Semesterproject"
  },
  Rainydays: {
    name: "Rainydays",
    url: "rainydays.html",
    header: `<em>A webshop for jackets</em>My very first website`,
    description: "Rainydays webshop",
    siteUrl: "https://rainydays-mariemorland.netlify.app/",
    githubUrl: "https://github.com/MarieLowzowMorland/Rainydays---Assignment"
  }
};

export const eksternalLinks = (selectedPage) => {
  let siteUrl = "";
  if(selectedPage.siteUrl){
    siteUrl = /*template*/ `
      <a href="${selectedPage.siteUrl}" 
        rel="noopener"
        target="_blank"
        aria-label="Open website for ${selectedPage.name}"
      >
        <span>Visit website</span> ${ GoTo() }
      </a>`;
  }

  return /*template*/ `
    <div class="external-links">
      ${ siteUrl }
      <a href="${selectedPage.githubUrl}" 
        rel="noopener"
        target="_blank"
        aria-label="Open GitHub repo for ${selectedPage.name}"
      >
        ${ Github() }
      </a>
    </div>`
}

const link = (selectedPage, linkToPage) => {
  let classNames = "";
  let ariaCurrentAttr = "";
  if( selectedPage === linkToPage ){
    classNames += " active";
    ariaCurrentAttr = 'aria-current="page"';
  }
  
  return /*template*/ `
  <li>
    <a href="${linkToPage.url}" 
      ${ariaCurrentAttr}
      class="${classNames}">
      ${linkToPage.name}
    </a>
  </li>`
};

const logoLink = (selectedPage) => {
  if(selectedPage === pageNames.HOME){
    return "";
  }

  return /*template*/ `
    <nav id="skiplink" aria-label="Skiplink menu">
      <a href="#main" class="skiplink" aria-label="Go to main content">Main content</a>
    </nav>
    <a 
      id="home-link" 
      href="${ pageNames.HOME.url }"
      aria-label="Go to home page" 
    >
      ${ Logo() }
    </a>`; 
};

const fontPage = (selectedPage) => {
  if(selectedPage === pageNames.HOME){
    return "";
  }

  return /*template*/ `
    <div class="frontpage">
      <div class="banner shadow-wrapper">
        <div class="menu-polygon center-image">
          <div class="description-wrapper center-image">
            <div class="page-description">
              <p>
                ${ selectedPage.description }
              </p>
            </div>
          </div>
          <div class="desktop-header">
            <h1>${ selectedPage.header }</h1>
          </div>
        </div>
      </div>
      <h1 class="mobile-header">${ selectedPage.header }</h1>
    </div>`;  
}

const headerTemplate = (selectedPage) => {
  return /*template*/ `
    ${ logoLink(selectedPage)}

    <div class="header-menu">
      <button id="hamburger-menu" aria-label="Open menu">
        ${ HamburgerMenu() }           
      </button>
    
      <div class="shadow-wrapper" id="menu">
        <nav class="menu-polygon">
          <ul>
            ${link(selectedPage, pageNames.How_I_work)}
            ${link(selectedPage, pageNames.Innovation_Coach)}
            ${link(selectedPage, pageNames.Community_Sience_Museum)}
            ${link(selectedPage, pageNames.Rainydays)}
            <li><button id="close-menu">Close Menu</button></li>
          </ul>
        </nav>
      </div>
    </div>
    
    ${ fontPage(selectedPage)}`;
};


const toggleMenu = (event) => {
  const mobileFrontPage = document.querySelector("#mobile > nav > svg");
  const menuButton = document.getElementById("hamburger-menu");
  const menu = document.getElementById("menu");
  if(menu.classList.contains("open")){
    menu.classList.remove("open");
    menuButton.setAttribute("aria-label", "Open menu");
    mobileFrontPage.classList.remove("menu-open");
  } else {
    menu.classList.add("open");
    menuButton.setAttribute("aria-label", "Close menu");
    mobileFrontPage.classList.add("menu-open");
  }
  menuButton.focus();
};

const addHeaderForPage = (selectedPage) => {
  document
    .querySelector("header")
    .insertAdjacentHTML("afterbegin", headerTemplate(selectedPage));

  document.getElementById("hamburger-menu").addEventListener("click", toggleMenu);
  document.getElementById("close-menu").addEventListener("click", toggleMenu);
};

export default addHeaderForPage;