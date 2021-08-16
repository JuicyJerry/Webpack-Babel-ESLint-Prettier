// import * as math from "./math.js";
// console.log(math.sum(1, 2)); // 3

import "./app.css";
import nyancat from "./nyancat.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
        <img src="${nyancat}"/>
    `;
});
