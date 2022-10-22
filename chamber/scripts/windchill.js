const temperature = document.getElementById('temperature');
const velocity = document.getElementById('velocity');
const windChill = document.getElementById('wind-chill');

function calculateWindChill() {
  const valueTemperature = parseFloat(temperature.innerText);
  const valueVelocity = parseFloat(velocity.innerText);
  if (!(valueTemperature <= 50 && valueVelocity > 3)) {
    windChill.innerText = 'N/A';
    return;
  }
  windChill.innerHTML = `${Math.round(
    35.74 +
      0.6215 * valueTemperature -
      35.75 * Math.pow(valueVelocity, 0.16) +
      0.4275 * valueTemperature * Math.pow(valueVelocity, 0.16)
  )}`;
}

calculateWindChill();
