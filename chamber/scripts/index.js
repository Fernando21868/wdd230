const hamburger = document.querySelector('.hamburgerBtn');
const datefield = document.querySelector('.date');
const actualYear = document.getElementById('actual-year');
const showBanner = document.querySelector('.banner');
const navContainer = document.querySelector('nav');
const navItems = navContainer.getElementsByTagName('a');

// Loop through the nav items and add the active class to the current/clicked nav item
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.parentElement.className += 'active';
  });
}

// Header actual day
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat('en-UK', {
  dateStyle: 'full',
}).format(now);
datefield.innerHTML = `${fulldateUK}`;

// Actual day
const actualDay = now.getDay();
if (actualDay === 1 || actualDay === 2) {
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