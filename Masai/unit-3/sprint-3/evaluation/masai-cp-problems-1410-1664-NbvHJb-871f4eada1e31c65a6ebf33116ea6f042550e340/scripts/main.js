// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
  ? import.meta.env.REACT_APP_JSON_SERVER_PORT
  : 9090
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

// data fetching URL's
const toursURL = `${baseServerURL}/tours`;
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
let filterNationalTours = document.getElementById("filter-National-tours");
let filterInternationalTours = document.getElementById("filter-International-tours");

//Ticket booking status div and cancel ticket button
let ticketBookStatus = document.getElementById("ticket-book-card");
let cancelTicketBtn = document.getElementById("cancel-ticket");

let employeesData = [];
let toursData = [];
let recipeData = [];

// ***** Event listeners ***** //
fetchData();
function fetchData() {
  fetch(toursURL)
    .then(res => res.json())
    .then(data => {
      toursData = data;
      console.log(data);
      appData(data);
    })
    .catch(err => console.log(err))
}

function appData(data) {
  mainSection.innerHTML = "";
  let cardList = document.createElement("div");
  cardList.className = "card-list";
  mainSection.append(cardList);
  data.forEach(item => {
    cardList.append(creCard(item))
  })
}

function creCard(item) {
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";

  let imgDiv = document.createElement("div");
  imgDiv.className = "card-image";

  let img = document.createElement("img");
  img.src = `${baseServerURL}/tours/${item.image}`;
  // img.src=`${toursURL}${item.image}`;
  img.setAttribute("alt", "pic");
  imgDiv.append(img);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let h3 = document.createElement("h3");
  h3.className = "card-title";
  h3.textContent = item.location;

  let cardDes = document.createElement("div");
  cardDes.className = "card-description";
  cardDes.textContent = item.type;

  let a = document.createElement("a");
  a.href = "#";
  a.setAttribute("data-name", item.location);
  a.className = "card-link";
  a.textContent = "Book Now";

  let cardPrice = document.createElement("div");
  cardPrice.className = "card-price";
  cardPrice.textContent = item.price;

  cardBody.append(h3, cardDes, a, cardPrice);
  cardDiv.append(imgDiv, cardBody);

  return cardDiv;
}

function sortPrice(employee1, employee2) {
  return employee1.price - employee2.price;
}

sortAtoZBtn.addEventListener("click", () => {
  toursData.sort(sortPrice);
  appData(toursData);
  console.log(toursData);
});

sortZtoABtn.addEventListener("click", () => {
  toursData.sort((employee1, employee2) =>
    sortPrice(employee2, employee1));
  appData(toursData);
});



filterNationalTours.addEventListener("click", () => {
  let filterData = toursData.filter(e => e.type === "National");
  appData(filterData);
});

filterInternationalTours.addEventListener("click", () => {
  let filterData = toursData.filter(e => e.type === "International");
  appData(filterData);
});

ticketBookStatus.textContent="BOOKING STATUS : NOT booked yet!";












fetchRecipesBtn.addEventListener("click",()=>{
  fetch(recipeURL)
  .then(res => res.json())
  .then(data => {
    toursData = data;
    console.log(data);
    appData(data);
  })
  .catch(err => console.log(err))
})



fetchEmployeesBtn.addEventListener("click",()=>{
  fetch(employeeURL)
  .then(res => res.json())
  .then(data => {
    toursData = data;
    console.log(data);
    appData(data);
  })
  .catch(err => console.log(err))
})