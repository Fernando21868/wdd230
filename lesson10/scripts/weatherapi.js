// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url =
  'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=2d629600d5bfa1d7dd6b51230f324221';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const desc = capitalizeWords(weatherData.weather[0].description);

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

apiFetch();
