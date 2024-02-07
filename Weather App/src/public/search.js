const searchBar = document.getElementById('search');
const optionsField = document.getElementById('options');
const resultsField = document.getElementById('results');

searchBar.addEventListener('input', async () => {
    optionsField.innerHTML = "";

    const prefix = searchBar.value.toLowerCase();
    if (prefix === "") return;

    const response = await fetch(`/cities-api?prefix=${prefix}`);
    const cities = await response.json();

    cities.forEach(city => {
        let button = document.createElement('button');
        button.innerText = city.name;
        button.addEventListener('click', async () => showResults(city));
        optionsField.appendChild(button);
    });
});

async function showResults(city) {
    resultsField.innerHTML = "";

    let heading = document.createElement('h3');
    heading.innerText = `Weather in ${city.name} today:`;
    
    let details = document.createElement('div');
    details.innerHTML = await getDetails(city);

    resultsField.appendChild(heading);
    resultsField.appendChild(details);
}

async function getDetails(city){
    const response = await fetch(`/weather-api?lat=${city.latitude}&lon=${city.longitude}`);
    const data = await response.json();
    
    // Format and return data
    return "<i>DETAILS GO HERE</i>";
}