let weatherData = {
  "cape town": {
    temp: 19.7,
    humidity: 80,
  },
  toronto: {
    temp: 17.3,
    humidity: 50,
  },
  cairo: {
    temp: 30.2,
    humidity: 20,
  },
  "new york city": {
    temp: 20.9,
    humidity: 100,
  },
  seoul: {
    temp: -5,
    humidity: 20,
  },
};

function askForCity() {
  let city = prompt("Enter a city:");
  if (city) {
    city = city.toLowerCase();
    if (weatherData[city]) {
      let tempCelsius = Math.round(weatherData[city].temp);
      let tempFahrenheit = Math.round((weatherData[city].temp * 9) / 5 + 32);
      let humidity = Math.round(weatherData[city].humidity);

      alert(
        `It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${city} with a humidity of ${humidity}%.`
      );
    } else {
      alert(
        `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`
      );
    }
  } else {
    alert("Please enter a valid city.");
  }
}

askForCity();