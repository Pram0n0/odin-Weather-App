// api key: a4eb1e468e8e4b27a0414824241101

let country = document.querySelector("#country");
const search = document.querySelector("#search");
const toggleUnitsBtn = document.querySelector("#toggleUnits");
const weather = document.querySelector(".weatherData");
let isCelsius = true;

toggleUnitsBtn.addEventListener("click", () => {
    isCelsius = !isCelsius;
    searchWeather();
});

search.addEventListener("click", () => {
    searchWeather();
});

function searchWeather() {
    console.log("search");
    console.log(country.value);
    fetch(`https://api.weatherapi.com/v1/current.json?key=a4eb1e468e8e4b27a0414824241101&q=${country.value}`, { mode: "cors" })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            const temperature = isCelsius ? response.current.temp_c + "°C" : response.current.temp_f + "°F";
            weather.innerHTML = `
            <p>Location: ${response.location.name}, ${response.location.country}</p>
            <p>Temperature: ${temperature}</p>
            `;
        })
        .catch(function (err) {
            console.log("Error!");
            weather.innerHTML = "Error fetching weather data.";
        });
}
