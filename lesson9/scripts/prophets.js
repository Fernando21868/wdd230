const requestURL =
  'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getData() {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonObject = await response.json();
  const prophets = jsonObject['prophets'];
  prophets.forEach((prophet) => {
    displayProphets(prophet);
  });
}

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let dateBirth = document.createElement('p');
  let placeBirth = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  // Add two other components for the birth data and birth place
  dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
  placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute(
    'alt',
    `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
  );
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(dateBirth);
  card.appendChild(placeBirth);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

const prove = getData();
