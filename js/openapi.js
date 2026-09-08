const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const cityEl = document.getElementById("city");
const formEl = document.getElementById("weather-form");
const cityInputEl = document.getElementById("city-input");
const resultLabelEl = document.getElementById("result-label");
const resultValueEl = document.getElementById("result-value");
const temperatureButton = document.querySelector(".get-temperature");
const conditionButton = document.querySelector(".get-weather-condition");

let currentLat = 37.6391;
let currentLon = -120.9969;

function getConditionText(code) {
  let condition = "unknown";
  if (code === 0) {
    condition = "Clear sky";
  } else if (code === 1 || code === 2 || code === 3) {
    condition = "Partly cloudy";
  } else if (code === 45 || code === 48) {
    condition = "Fog";
  } else if (code >= 51 && code <= 57) {
    condition = "Drizzle";
  } else if (code >= 61 && code <= 67) {
    condition = "Rain";
  } else if (code >= 71 && code <= 77) {
    condition = "Snow";
  } else if (code >= 80 && code <= 82) {
    condition = "Rain showers";
  } else if (code === 85 || code === 86) {
    condition = "Snow showers";
  } else if (code === 95 || code === 96 || code === 99) {
    condition = "Thunderstorm";
  }
  return condition;
}

async function getTemperature() {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${currentLat}&longitude=${currentLon}&current=temperature_2m&temperature_unit=fahrenheit`,
  );
  const data = await response.json();
  let temperature = data.current.temperature_2m;
  resultLabelEl.textContent = "Temperature: ";
  resultValueEl.textContent = temperature + "°F";
}

async function getCondition() {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${currentLat}&longitude=${currentLon}&current=weather_code`,
  );
  const data = await response.json();
  const code = data.current.weather_code;
  resultLabelEl.textContent = "Condition: ";
  const conditionText = getConditionText(code);
  resultValueEl.textContent = conditionText;
}

async function searchCity(cityName) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data); // always look at the real shape first

  if (!data.results || data.results.length === 0) {
    alert("Invalid city. Please try again.");
    return;
  } else {
    const place = data.results[0];
    cityEl.textContent = place.name;
    currentLat = place.latitude;
    currentLon = place.longitude;
    resultLabelEl.textContent = "";
    resultValueEl.textContent = "";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  searchCity(cityInputEl.value);
});

temperatureButton.addEventListener("click", () => {
  getTemperature();
});

conditionButton.addEventListener("click", () => {
  getCondition();
});

