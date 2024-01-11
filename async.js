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

async function searchWeather() {
    console.log("search");
    console.log(country.value);
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a4eb1e468e8e4b27a0414824241101&q=${country.value}`, { mode: "cors" })
        const result = await response.json();
        console.log(result);
        const temperature = isCelsius ? result.current.temp_c + "°C" : result.current.temp_f + "°F";
        weather.innerHTML = `
        <p>Location: ${result.location.name}, ${result.location.country}</p>
        <p>Temperature: ${temperature}</p>
        `;
    } catch (error) {
        console.log("Error!");
        weather.innerHTML = "Error fetching weather data.";
    }
}