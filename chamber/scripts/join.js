const dateTimeEl = document.getElementById('dateTime');

// Header actual day
const dateTime = new Date(Date.now());

dateTimeEl.value = `${
  dateTime.getMonth() + 1
}/${dateTime.getDate()}/${dateTime.getFullYear()} - ${dateTime.getHours()}:${dateTime.getMinutes()}`;
