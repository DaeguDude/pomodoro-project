import { sayHello } from "./dropdown.js";
import '../style/style.css';
import IconWhite from './img/icon-white.png';
// import Report from './img/graph-white.png';
// import Setting from './img/config-white.png';
// import


const logo = document.querySelector('.logo')

// Add the image to our existing div.
const serviceIcon = new Image();
serviceIcon.src = IconWhite;
logo.appendChild(serviceIcon);

navBar.render();