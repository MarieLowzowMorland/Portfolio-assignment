import addHeaderForPage, { pageNames } from "../templates/header.js";

addHeaderForPage(pageNames.HOME);

const landscapeSliceQuery = window.matchMedia("screen and (min-aspect-ratio: 4/3) and (max-aspect-ratio: 3/1) and (min-height: 30rem)");

const setSvgToLandscapeSliceIfApplicable = () => {
  if(landscapeSliceQuery && landscapeSliceQuery.matches){
    document.querySelector("#landscape > svg").setAttribute("preserveAspectRatio", "xMidYMid slice");
  } else {
    document.querySelector("#landscape > svg").setAttribute("preserveAspectRatio", "xMidYMid meet");
  };
};

setSvgToLandscapeSliceIfApplicable();
landscapeSliceQuery.addEventListener("change", setSvgToLandscapeSliceIfApplicable);
