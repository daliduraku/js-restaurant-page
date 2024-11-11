
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

    //contact information
    const contactInfo = document.createElement('section');
    contactInfo.classList.add('contact-info');

    // location info
    const location = document.createElement('h2');
    location.textContent = "Our Location";
    const address = document.createElement('p');
    address.textContent = "9404 Bald Hill LaneBrooklyn, NY 11228";
    contactInfo.appendChild(location);
    contactInfo.appendChild(address);

    // phone number info
    const phone = document.createElement('h2');
    phone.textContent = "Phone";
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "(123)-456-7890";
    contactInfo.appendChild(phone);
    contactInfo.appendChild(phoneNumber);
    
    // email address info
    const email = document.createElement('h2');
    email.textContent = "Email";
    const emailAddress = document.createElement('p');
    emailAddress.textContent = "info@peachesrestaurant.com";
    contactInfo.appendChild(email);
    contactInfo.appendChild(emailAddress);


}