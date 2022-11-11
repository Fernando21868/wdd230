// https://fernando21868.github.io/wdd230/chamber/json/data.json

const requestURL =
  'https://fernando21868.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

async function getData() {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonObject = await response.json();
  const companies = jsonObject['companies'];
  console.log(companies);
  companies.forEach((company) => {
    displayCompanies(company);
  });
}

function displayCompanies(company) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let membership = document.createElement('p');
  let opening = document.createElement('p');


  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = company.name;

  // Add two other components for the birth data and birth place
  address.textContent = `Address: ${company.address}`;
  phone.textContent = `Phone number: ${company.phonenumber}`;
  membership.textContent = `Membership level: ${company.membership}`;
//   opening.textContent = `Opening year: ${company.opening }`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', company.imageurl);
  portrait.setAttribute(
    'alt',
    `Portrait of ${company.name} -  year of opening`
  );
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(portrait);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(membership);
  card.appendChild(opening);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

const prove = getData();
