// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const weatherTemp = document.querySelector('#weather-temperature');
const weatherCond = document.querySelector('#weather-condition');
const weatherWindSpeed = document.querySelector('#weather-speed');
const weatherWindChill = document.querySelector('#weather-wind-chill');

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=San%20Salvador%20de%20Jujuy&units=imperial&appid=2d629600d5bfa1d7dd6b51230f324221';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function capitalizeWords(string) {
  let listWords = string.toLowerCase().split(' ');
  for (let i = 0; i < listWords.length; i++) {
    listWords[i] =
      listWords[i].charAt(0).toUpperCase() + listWords[i].substring(1);
  }
  return listWords.join(' ');
}

function displayResults(weatherData) {
  const celsius = (weatherData.main.temp - 32) * (5 / 9);
  weatherTemp.innerHTML = `<strong>${celsius.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = capitalizeWords(weatherData.weather[0].description);

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherCond.textContent = desc;
  weatherWindSpeed.textContent = (weatherData.wind.speed * 1.60934).toFixed(2);
  calculateWindChill(weatherData.main.temp, weatherData.wind.speed);
}

function calculateWindChill(valueTemperature, valueVelocity) {
  if (!(valueTemperature <= 50 && valueVelocity > 3)) {
    weatherWindChill.innerText = 'N/A';
    return;
  }
  weatherWindChill.innerHTML = `${Math.round(
    35.74 +
      0.6215 * valueTemperature -
      35.75 * Math.pow(valueVelocity, 0.16) +
      0.4275 * valueTemperature * Math.pow(valueVelocity, 0.16)
  )}`;
}

apiFetch();
