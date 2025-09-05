const searchBtn = document.getElementById("searchBtn");
const weatherCard = document.getElementById("weatherCard");
const cityInput = document.getElementById("cityInput");

// ✅ Weather fetch function
async function fetchWeather(city) {
  if (city === "") {
    weatherCard.style.display = "block";
    weatherCard.innerHTML = '<p style="color:red;">⚠ Please enter a city name!</p>';
    return;
  }

  try {
    // Free API - No key needed (wttr.in)
    const url = `https://wttr.in/${city}?format=j1`;
    const response = await fetch(url);
    const data = await response.json();

    // Weather data extraction
    const area = data.nearest_area[0].areaName[0].value;
    const country = data.nearest_area[0].country[0].value;
    const region = data.nearest_area[0].region[0].value;
    const temp = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;

    // Show weather card
    weatherCard.style.display = "block";
    weatherCard.innerHTML = `
      <h2>${area}, ${country}</h2>
      <p><strong>Region:</strong> ${region}</p>
      <p><strong>Temperature:</strong> ${temp} °C</p>
      <p><strong>Condition:</strong> ${desc}</p>
    `;
  } catch (error) {
    console.error("Error fetching weather:", error);
    weatherCard.style.display = "block";
    weatherCard.innerHTML = '<p style="color:red;">❌ Unable to fetch weather data!</p>';
  }
}

// ✅ Search button click
searchBtn.addEventListener("click", () => {
  fetchWeather(cityInput.value.trim());
});

// ✅ Enter key press triggers search
cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetchWeather(cityInput.value.trim());
  }
});

// ✅ Default Delhi weather on load
window.onload = () => {
  fetchWeather("Delhi");
};