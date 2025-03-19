document.addEventListener('DOMContentLoaded', function() {
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windspeed');
    const windChillElement = document.getElementById('windchill');

    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);
    console.log(temperature, windSpeed);

    let windChill = 'N/A';
    if (temperature <= 50 && windSpeed > 3) {
        windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChill = windChill.toFixed(2) + '°F';
    }

    windChillElement.textContent = windChill;
});