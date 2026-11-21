// WDD 131 Place Assignment — dynamic footer and wind chill.
const temperature = 29; // Celsius; keep this in sync with the Weather section.
const windSpeed = 14;   // km/h; keep this in sync with the Weather section.

// Metric wind chill formula. Returns the calculated value to one decimal place.
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// The metric formula is only valid at temperatures <= 10°C and wind speeds > 4.8 km/h.
const windChill = (temperature <= 10 && windSpeed > 4.8)
  ? `${calculateWindChill(temperature, windSpeed)} °C`
  : "N/A";

document.querySelector("#wind-chill").textContent = windChill;
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
