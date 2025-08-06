async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = '74db55464cddd59d50b4e049d0adc1b3';
    const weatherResult = document.getElementById("weatherResult");

    if (!city) {
        weatherResult.innerHTML = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${(city)}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherResult.innerHTML = weatherInfo;
        } else {
            weatherResult.innerHTML = "City not found.";
        }
    } catch (error) {
        weatherResult.innerHTML = "Error fetching weather data.";
        console.error(error);
    }
}
