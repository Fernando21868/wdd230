const hamburger = document.querySelector('.hamburgerBtn');
const datefield = document.querySelector('.date');
const actualYear = document.getElementById('actual-year');

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat('en-UK', {
  dateStyle: 'full',
}).format(now);
datefield.innerHTML = `${fulldateUK}`;

const lastMod = new Date(document.lastModified);
const currentYear = now.getFullYear();
document.getElementById('actual-year').textContent = currentYear;
document.getElementById('last-uptdated').textContent = document.lastModified;

function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.querySelector('.hamburgerBtn').classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
