const lastMod = new Date(document.lastModified);
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('actual-year').textContent = currentYear;
document.getElementById('last-uptdated').textContent = document.lastModified;
