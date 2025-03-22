// Atualiza o ano atual no rodapé
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Atualiza a data da última modificação do documento
document.getElementById("lastModified").textContent = document.lastModified;

// Dados do local (exemplo estático)
const placeData = {
    area: "8,515,767", // km² (Exemplo para o Brasil)
    population: "213,000,000",
    capital: "Brasília",
    languages: "Portuguese",
    currency: "Brazilian Real (BRL)",
    timezone: "GMT-3",
    callingCode: "+55",
    tld: ".br"
};

// Exibe os dados na página
document.getElementById("area").textContent = placeData.area;
document.getElementById("population").textContent = placeData.population;
document.getElementById("capital").textContent = placeData.capital;
document.getElementById("languages").textContent = placeData.languages;
document.getElementById("currency").textContent = placeData.currency;
document.getElementById("timezone").textContent = placeData.timezone;
document.getElementById("callingCode").textContent = placeData.callingCode;
document.getElementById("tld").textContent = placeData.tld;

// Cálculo do wind chill
const temperature = 5; // Temperatura em Celsius
const windSpeed = 10;  // Velocidade do vento em km/h

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
}
const weatherData = {
    temperature: "25°C",
    conditions: "Partly Cloudy",
    wind: "10 km/h",
    windChill: "N/A"
};
document.getElementById("temperature").textContent = weatherData.temperature;
document.getElementById("conditions").textContent = weatherData.conditions;
document.getElementById("wind").textContent = weatherData.wind;
document.getElementById("windChill").textContent = weatherData.windChill;

function displayWindChill() {
    let windChillValue = "N/A";

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillValue = calculateWindChill(temperature, windSpeed) + " °C";
    }

    document.getElementById("windChill").textContent = windChillValue;
}

document.addEventListener("DOMContentLoaded", displayWindChill);
