// home page
function createPage() {
    // content div
    const content = document.getElementById('content');

    // name of the restaurant
    const restaurantName = document.createElement('h1')
    restaurantName.textContent = "Peaches"
    main.append(restaurantName);

    // main section
    const main = document.createElement('main');

    const description = document.createElement('p');
    description.textContent = "Experience the finest dining with our exquisite menu crafted by amazing chefs."
    main.appendChild(description);


    // img
    const image = document.createElement('img')
    image.src = "./img/restaurant-home-page.jpg";
    image.alt = "A view of our restaurant";
    main.appendChild(image);

    // hours of operation
    const schedule = document.createElement('section');
    const scheduleTitle = document.createElement('h2');
    scheduleTitle.textContent = "Hours"
    schedule.appendChild(scheduleTitle)

    const hourOperations = document.createElement('ul');

    const hours = ["Sunday: 8am - 8pm", "Monday: 10am - 11pm", "Tuesday: 10am - 11pm", "Wednesday: 10am - 11pm", "Thursday: 10am - 11pm", "Friday: 10am - 11pm", "Friday: 10am - 11pm", "Saturday: 10am - 11pm"]

    hours.forEach(hour => {
        const listItem = document.createElement('li');
        listItem.textContent = hour;
        hourOperations.appendChild(listItem);
    });

    schedule.appendChild(hourOperations);
    main.appendChild(schedule);

}