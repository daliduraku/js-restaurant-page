
export function loadContactPage() {
    //content
    const content = document.getElementById('content');


    //remove existing content
    content.innerHTML = "";

    // main section of the content page
    const main = document.createElement('main');
    main.classList.add('contact-info');

    // contact title 
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact Us";
    main.appendChild(contactTitle);

    //

}