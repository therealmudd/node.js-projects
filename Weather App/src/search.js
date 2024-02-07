const searchBar = document.getElementById("search");
const optionsField = document.getElementById("options");
const resultsField = document.getElementById("results");

searchBar.addEventListener("input", () => {
    optionsField.innerHTML = "";
    const prefix = searchBar.value.toLowerCase();
    if (prefix === "") return;

    // *User prefix make api call and find cities
    let options = cities.filter(c => c.name.toLowerCase().startsWith(prefix));
    
    options.forEach(o => {
        let button = document.createElement("button");
        button.innerText = o.name;
        button.addEventListener("click", showResults);
        optionsField.appendChild(button);
    });
});

function showResults(){
    let city = this.innerText;
    let {latitude, longitude} = cities.find(c => c.name === city);

    // *Make an api call to get weather data given a latitude and longitude
    let weatherData = data;
    let description = weatherData['weather'][0]['description'];
    let temp = toDegCel(weatherData['main']['temp']);

    resultsField.innerHTML = `
    <h3>Weather in ${city}</h3>
    <p>${description} ${temp}°C</p>
    <p><strong>Details:</strong></p>
    <p><i>DETAILS GO HERE</i></p>
    `;
}

function toDegCel(value) {
    return Math.round(value - 273.15);
}

function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

const cities = [
    {name: "New York", latitude: randRange(-90, 90), longitude: randRange(-180, 180)},
    {name: "London", latitude: randRange(-90, 90), longitude: randRange(-180, 180)},
    {name: "Paris", latitude: randRange(-90, 90), longitude: randRange(-180, 180)},
    {name: "Lisbon", latitude: randRange(-90, 90), longitude: randRange(-180, 180)},
    {name: "Beijing", latitude: randRange(-90, 90), longitude: randRange(-180, 180)},
    {name: "Berlin", latitude: randRange(-90, 90), longitude: randRange(-180, 180)},
    {name: "Barcelona", latitude: randRange(-90, 90), longitude: randRange(-180, 180)},
].sort().reverse();

data = {
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
};


// searchBar.addEventListener("input", async () => {
//     const prefix = searchBar.getAttribute("value");
//     const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${prefix}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'aa8e7c7c67msh657c6d7f234a29ap14b2e6jsne3cc80e43b25',
//             'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();

//         const count = result.metadata.totalCount;
//         const options = [];
//         for (let i = 0; i < count; i++) {
            
//         }


//     } catch (error) {
//         console.error(error);
//     }
// });