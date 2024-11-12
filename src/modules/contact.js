
export function loadContactPage() {
    //content
    const content = document.getElementById('content');


    //remove existing content
    content.innerHTML = "";

    // main section of the content page
    const main = document.createElement('main');
    main.classList.add('contact-main');

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


    // form section 
    const formSection = document.createElement('section');
    formSection.classList.add('contact-form');

    // form 
    const form = document.createElement('form');
    form.method = "POST";
    form.action = "submit_form.php";
    

    // label and input for name
    const labelName = document.createElement('label');
    labelName.for = "name";
    labelName.textContent = "Your Name";
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    form.appendChild(labelName);
    form.appendChild(nameInput);

    // label and input for email

    const labelEmail = document.createElement('label');
    labelEmail.for = "email";
    labelEmail.textContent = "Your Email";
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    form.appendChild(labelEmail);
    form.appendChild(emailInput);

    // label and input for message 

    const labelMessage = document.createElement('label');
    labelMessage.for = "message";
    labelMessage.textContent = "Your message";
    const messageInput = document.createElement('textarea');
    messageInput.id = "message";
    messageInput.name = "message";
    messageInput.rows = "5";
    form.appendChild(labelMessage);
    form.appendChild(messageInput);

    // button for submit 
    const submit = document.createElement('button');
    submit.type = "button";
    submit.textContent = "Send Message";
    form.appendChild(submit);

    formSection.appendChild(form);
    main.appendChild(contactInfo);
    main.appendChild(formSection);
    content.appendChild(main);

}