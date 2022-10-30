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
    console.log(current);
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

// Get all imgs with data-src attribute
const divToLoad = document.querySelectorAll('article[data-class]');

// Optional parameters being set for the IntersectionObserver
const imgOptions = {
  threshold: 1,
  rootMargin: '0px 0px 50px 0px',
};

// Lazy Load Images
const loadImages = (article) => {
  const img = article.querySelector('img[data-src]');
  const src = img.getAttribute('data-src');
  const className = article.getAttribute('data-class');
  article.setAttribute('class', className);
  img.setAttribute('src', src);
  article.removeAttribute('data-class');
  img.removeAttribute('data-src');
};

// First check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (!item.isIntersecting) {
        return;
      } else {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  divToLoad.forEach((divEl) => {
    imgObserver.observe(divEl);
  });
} else {
  // Just load all images if not supported
  divToLoad.forEach((divEl) => {
    loadImages(divEl);
  });
}

// Number of visits
// initialize display elements

// initialize display elements
const todayDisplay = document.getElementById('days');

// get the stored value in localStorage
let numVisits = JSON.parse(localStorage.getItem('visits-ls'));

// determine if this is the first visit or display the number of visits.
if (numVisits) {
  numVisits.push(Date.now());
  const timeBetweenLastVisit =
    Math.floor(((numVisits[numVisits.length - 1] - numVisits[numVisits.length - 2]) /
      1000) /
    60 / 60 / 24);
    todayDisplay.textContent = timeBetweenLastVisit;
  if (numVisits.length > 2){
    numVisits.shift();
  }
  localStorage.setItem('visits-ls', JSON.stringify(numVisits));
} else {
  const visits = [];
  const first_visit = Date.now();
  visits.push(first_visit);
  localStorage.setItem('visits-ls', JSON.stringify(visits));
  todayDisplay.textContent = 'This is your first visit';
}