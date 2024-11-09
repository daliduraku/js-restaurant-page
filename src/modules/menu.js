
function loadMenuPage() {
    const content = document.getElementById('content');

    // removing existing content
    content.innerHTML = '';

    // main section of the menu page
    const main = document.createElement('main');

    // menu section 
    const menuSection = document.createElement('selection');
    const menuTitle = document.createElement('h2'); 
    menuTitle.textContent = "Our Menu";
    menuSection.appendChild(menuTitle)

    const menuItem = [
        {name: 'Truffle Pasta', description: 'Homemade pasta with fresh truffles', price: '$25'},
        {name: 'Grilled Salmon', description: 'Served with seasonal vegetables', price: '$30' },
        {name: 'Steak Frites', description: 'Juicy sirloin steak served with crispy fries and garlic aioli', price: '$35'},
        {name: 'Margherita Pizza', description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil', price: '$20'},
        {name: 'Lobster Bisque', description: 'Creamy lobster soup with a touch of brandy and fresh herbs', price: '$15'}

    ];
}