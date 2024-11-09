
import { loadHomePage } from './modules/home.js'; 

document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();

    // event listeners to navigation buttons

    const homeButton = document.querySelector('nav button:nth-child(1)');


    homeButton.addEventListener("click", loadHomePage);
});