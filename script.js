const API_KEY = "b2020652a9815a8caa4c283d137bf20b"; // Replace with your OpenWeatherMap API key

function getWeather() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Replace your API endpoint with the URL that includes your key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found!"); // Custom error if city is not found
            }
            return response.json(); // Parse the response JSON
        })
        .then(data => {
            document.getElementById("weather-info").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.weather[0].description}</h3>
                <h3>🌡 Temperature: ${data.main.temp}°C</h3>
                <h3>💨 Wind Speed: ${data.wind.speed} m/s</h3>
            `;
        })
        .catch((error) => {
            alert(error.message); // Display error message if city not found or other issue
            document.getElementById("weather-info").innerHTML = "";
        });
}

