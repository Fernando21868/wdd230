const hamburger = document.querySelector('.hamburgerBtn');
const datefield = document.querySelector('.date');
const actualYear = document.getElementById('actual-year');
const showBanner = document.querySelector('.event');

// Header actual day
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat('en-UK', {
  dateStyle: 'full',
}).format(now);
datefield.innerHTML = `${fulldateUK}`;

// Actual day
let actualDay = now.getDay();
if (actualDay === 1 || actualDay === 2) {
  const ocultTitle = document.querySelector('.event h2');
  ocultTitle.style.display = 'none';
  showBanner.classList.add('show');
}

// Actual year-Last updated footer
const lastMod = new Date(document.lastModified);
const currentYear = now.getFullYear();
document.getElementById('actual-year').textContent = currentYear;
document.getElementById('last-uptdated').textContent = document.lastModified;

function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.querySelector('.hamburgerBtn').classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
