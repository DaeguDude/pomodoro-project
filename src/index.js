import { sayHello } from "./dropdown.js";
import '../style/style.css';
import Icon from '../img/icon-white.png';

const logo = document.querySelector('.logo')

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

logo.appendChild(myIcon);



console.log('hello');

sayHello();


navBar.render();