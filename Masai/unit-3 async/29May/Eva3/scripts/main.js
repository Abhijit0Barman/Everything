// const { create } = require("json-server");

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
  ? import.meta.env.REACT_APP_JSON_SERVER_PORT
  : 9090
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

// data fetching URL's
const matchesURL = `${baseServerURL}/matches`;
const recipeURL = `${baseServerURL}/recipes`;
const employeeURL = `${baseServerURL}/employees`;

//fetching buttons
let fetchRecipesBtn = document.getElementById("fetch-recipes");
let fetchEmployeesBtn = document.getElementById("fetch-employees");

//Append div with class "card-link" to mainSection
let mainSection = document.getElementById("data-list-wrapper");

//Sorting Buttons
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

//filtering buttons
let filterLessThan20thousand = document.getElementById(
  "filter-Less-Than-20thousand"
);
let filterMoreThan20thousand = document.getElementById(
  "filter-More-Than-20thousand"
);

//Ticket booking status div and cancel ticket button
let ticketBookStatus = document.getElementById("ticket-book-card");
let cancelTicketBtn = document.getElementById("cancel-ticket");

let matchesData = [];
let employeesData = [];
let recipeData = [];

fetchMatche();
function fetchMatche() {
  fetch(matchesURL)
    .then(res => res.json())
    .then(data => {
      matchesData = data;
      displayMatch(matchesData);
      console.log(data);
    }).catch(err => console.log(err))
}

function displayMatch(data) {
  mainSection.innerHTML = "";
  data.forEach(match => {
    let matchCard = createMatch(match);
    mainSection.appendChild(matchCard);
  });
}

function createMatch(match) {
  let card = document.createElement("div");
  card.classList.add('card');

  let cardImg = document.createElement("div");
  cardImg.classList.add('card-image');
  let image = document.createElement('img');
  image.src = `${baseServerURL}${match.image}`;
  cardImg.appendChild(image);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = match.name;
  cardBody.appendChild(title);

  let desc = document.createElement("div");
  desc.classList.add("card-description");
  desc.textContent = `captain: ${match.captain}`;
  cardBody.appendChild(desc);

  let booklink = document.createElement('a');
  booklink.classList.add("card-link");
  booklink.href = '#';
  booklink.textContent = 'BOOK NOW';
  booklink.setAttribute('data-name', JSON.stringify(match.name));
  booklink.addEventListener("click", bookTicket);
  cardBody.appendChild(booklink);

  let price = document.createElement("div");
  price.classList.add('card-price');
  price.textContent = `Price: ${match.price}`;
  cardBody.appendChild(price);

  card.appendChild(cardImg);
  card.appendChild(cardBody);

  return card;
}

function bookTicket(e) {
  e.preventDefault();
  let matchName = JSON.parse(e.target.getAttribute('data-name'));
  ticketBookStatus.textContent = `Ticket booked for ${matchName}`;
}

cancelTicketBtn.addEventListener('click', cancelTicket);
function cancelTicket() {
  ticketBookStatus.textContent = '';
  ticketBookStatus.style.display = 'none';
  cancelTicketBtn.style.display = 'none';
}

sortAtoZBtn.addEventListener('click', sortlowtohigh);
function sortlowtohigh() {
  matchesData.sort((a, b) => a.price - b.price);
  displayMatch(matchesData);
}

sortZtoABtn.addEventListener('click', sorthightolow);
function sorthightolow() {
  matchesData.sort((a, b) => b.price - a.price);
  displayMatch(matchesData);
}

filterLessThan20thousand.addEventListener('click', filterless);
filterMoreThan20thousand.addEventListener('click', filtermore);

function filterless() {
  let filtermatch = matchesData.filter(match => match.price < 20000);
  displayMatch(filtermatch)
}
function filtermore() {
  let filtermatch = matchesData.filter(match => match.price >= 20000);
  displayMatch(filtermatch)
}


ticketBookStatus.textContent = "BOOKING STATUS : NOT booked yet!";

fetchRecipesBtn.addEventListener('click', fetchRecipi);
function fetchRecipi() {
  fetch(recipeURL)
    .then(res => res.json())
    .then(data => {
      recipeData = data.slice(0, 10);
      displayRecipi();
    })
    .catch(err => console.log(err))
}

function displayRecipi() {
  mainSection.innerHTML = "";

  recipeData.forEach(e => {
    let recipiCard = createRecipi(e);
    mainSection.appendChild(recipiCard);
  });
}

function createRecipi(e) {
  let card=document.createElement("div");
  card.classList.add("card");

  let cardImg=document.createElement("div");
  cardImg.classList.add("card-image");
  let image=document.createElement("img");
  image.src=`${baseServerURL}${e.image}`
  cardImg.appendChild(image);

  let cardBody=document.createElement("div");
  cardBody.classList.add('card-body');

  
  let title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = e.name;
  cardBody.appendChild(title);

  let desc = document.createElement("div");
  desc.classList.add("card-description");
  desc.textContent = e.price;
  cardBody.appendChild(desc);

  card.appendChild(cardImg);
  card.appendChild(cardBody);

  return card;

}