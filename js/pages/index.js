import addHeaderForPage, { pageNames } from "../templates/header.js";

addHeaderForPage(pageNames.HOME);

const landscapeSliceQuery = window.matchMedia(
  "screen and (min-aspect-ratio: 4/3) and (max-aspect-ratio: 3/1), screen and (max-width: 992px)"
);
const portraitSliceQuery = window.matchMedia(
  "screen and (min-aspect-ratio: 1/2) and (max-aspect-ratio: 4/3), screen and (max-width: 992px)"
);

const setSvgToLandscapeSliceIfApplicable = () => {
  if (landscapeSliceQuery && landscapeSliceQuery.matches) {
    document
      .querySelector("#landscape > svg")
      .setAttribute("preserveAspectRatio", "xMidYMid slice");
  } else {
    document
      .querySelector("#landscape > svg")
      .setAttribute("preserveAspectRatio", "xMidYMid meet");
  }
};

const setSvgToPortraitSliceIfApplicable = () => {
  if (portraitSliceQuery && portraitSliceQuery.matches) {
    document
      .querySelector("#portrait > svg")
      .setAttribute("preserveAspectRatio", "xMidYMid slice");
  } else {
    document
      .querySelector("#portrait > svg")
      .setAttribute("preserveAspectRatio", "xMidYMin meet");
  }
};

setSvgToLandscapeSliceIfApplicable();
setSvgToPortraitSliceIfApplicable();
landscapeSliceQuery.addEventListener(
  "change",
  setSvgToLandscapeSliceIfApplicable
);
portraitSliceQuery.addEventListener(
  "change",
  setSvgToPortraitSliceIfApplicable
);
