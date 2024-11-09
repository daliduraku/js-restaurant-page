
import { loadHomePage } from './modules/home.js'; 
import { loadMenuPage } from './modules/menu.js';

document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();

    // event listeners to navigation buttons

    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');


    homeButton.addEventListener("click", loadHomePage);
    menuButton.addEventListener("click", loadMenuPage);
});