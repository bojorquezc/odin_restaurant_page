import './style_restaurant.css';
import logo from './images/youkoso_logo_color.svg';

import initializeWebsite from "./webpage";
initializeWebsite();

const youkosoLogo = new Image();
youkosoLogo.src = logo;
youkosoLogo.classList.add('nav_logo');

const navBar = document.getElementById("nav_bar");
navBar.appendChild(youkosoLogo);