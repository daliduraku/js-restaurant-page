
 export function loadMenuPage() {
    const content = document.getElementById('content');

    // removing existing content
    content.innerHTML = '';

    // main section of the menu page
    const main = document.createElement('main');

    // menu section 
    const menuSection = document.createElement('section');
    menuSection.classList.add('menuSection');
    const menuTitle = document.createElement('h2'); 
    menuTitle.textContent = "Our Menu";
    menuSection.appendChild(menuTitle)

    const menuItems = [
        {name: 'Truffle Pasta', description: 'Homemade pasta with fresh truffles', price: '$25'},
        {name: 'Grilled Salmon', description: 'Served with seasonal vegetables', price: '$30' },
        {name: 'Steak Frites', description: 'Juicy sirloin steak served with crispy fries and garlic aioli', price: '$35'},
        {name: 'Margherita Pizza', description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil', price: '$20'},
        {name: 'Lobster Bisque', description: 'Creamy lobster soup with a touch of brandy and fresh herbs', price: '$15'}

    ];

    menuItems.forEach((item) => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add("namePlate")
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);
        menuSection.appendChild(itemContainer);

    });

    main.appendChild(menuSection);
    content.appendChild(main);

}
