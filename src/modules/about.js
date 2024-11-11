
export function loadAboutPage () {
    const content = document.getElementById('content');
    // removing any content
    content.innerHTML = "";
    // create the main section 
    const main = document.createElement('main');
    main.classList.add('aboutMain');

    // creating the about section title
    const about = document.createElement('div');
    about.classList.add('about');
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = "About Us";
    const welcome = document.createElement('p');
    welcome.textContent = "Founded by Molla with a passion for food and a vision to create a gathering place for food lovers, Peaches has grown from a small neighborhood gem to one of the city's favorite dining destinations. Inspired by the traditions of Dardania, our dishes celebrate authenticity, freshness, and creativity.";
    about.appendChild(aboutTitle);
    about.appendChild(welcome);

    // image of the chef 
    const chefSection = document.createElement('div');
    chefSection.classList.add('chef-container');
    const image = document.createElement('img');
    image.src = "../images/chef.jpg";
    image.alt = "Chef of Peaches"
    const chefExp = document.createElement('p');
    chefExp.textContent = "Chef Molla brings over 11 years of experience to Peaches, mastering the art of dardanian cuisine and working with the finest ingredients. Known for his creativity, Chef Molla ensures that each dish served is a true work of art."
    chefSection.appendChild(image);
    chefSection.appendChild(chefExp);

    // our ambiance
    const ambiance = document.createElement('div');
    ambiance.classList.add('ambiance');
    const ambianceTitle = document.createElement('h2');
    ambianceTitle.textContent = "Our Ambiance";
    const ambianceDescription = document.createElement('p');
    ambianceDescription.textContent = "Peaches, we believe that a memorable dining experience extends beyond just great food. Our interiors are designed to be inviting and elegant, with warm lighting, comfortable seating, and a decor that reflects our restaurant’s unique personality. Whether you’re here for a casual meal or a special occasion, we aim to make every visit exceptional.";
    ambiance.appendChild(ambianceTitle);
    ambiance.appendChild(ambianceDescription);

    main.appendChild(about);
    main.appendChild(chefSection);
    main.appendChild(ambiance);

    // append main to content
    content.appendChild(main);
}