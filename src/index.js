
import { loadHomePage } from './modules/home.js'; 
import { loadMenuPage } from './modules/menu.js';
import { loadAboutPage } from './modules/about.js';
import { loadContactPage } from './modules/contact.js';
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();

    // event listeners to navigation buttons

    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const aboutButton = document.querySelector('nav button:nth-child(3)');
    const contactButton = document.querySelector('nav button:nth-child(4)');



    homeButton.addEventListener("click", loadHomePage);
    menuButton.addEventListener("click", loadMenuPage);
    aboutButton.addEventListener("click", loadAboutPage);
    contactButton.addEventListener("click", loadContactPage);
});