// const { data } = require("cypress/types/jquery");

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;

// ===================================
// function fetchData() {
//   fetch(`${baseServerURL}/users?_page=2&_limit=10`)
//   .then(res => res.json())
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err))
// }
// ============OR===============
// let paginationWrapper = document.getElementById("pagination-wrapper");
// let datalistWrapper = document.getElementById("data-list- wrappper");

// fetchData();

// async function fetchData(page) {
//   try {
//     console.log(page);
//     let res = await fetch(`${baseServerURL}/users?_page=${page}&_limit=10`);
//     let total = res.headers.get("X-Total-count");
//     let pageCount = Math.ceil(total / 10);
//     paginationWrapper.innerHTML = "";
//     for (let i = 1; i <= pageCount; i++) {
//       paginationWrapper.append(createBtn(i));
//     }
//     let data = await res.json();

//     console.log(data);
//     displayData(data);
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// function createBtn(id) {
//   let btn = document.createElement("button");
//   btn.className = "pagination-button";
//   btn.setAttribute("data-page-number", id);
//   btn.textContent = id;
//   btn.addEventListener("click", () => {
//     fetchData(id);
//   });
//   return btn;
// }

// function createCard(item) {
//   let card = document.createElement("div");
//   card.setAttribute("data-id", item.id);
//   card.className = "card";

//   let cardImg = document.createElement("div");
//   cardImg.className = "card_img";

//   let cardBody = document.createElement("div");
//   cardBody.className = "card_body";

//   let cardDesc = document.createElement("div");
//   cardDesc.className = "card_item card_description";
//   cardDesc.textContent = item.email;

//   let img = document.createElement("img");
//   img.src = item.avatar;
//   img.setAttribute("alt", `${item.firstname} ${item.lastname} image`)

//   let h3 = document.createElement("h3");
//   h3.className = "card_item card_title";
//   h3.textContent = `${item.firstname} ${item.lastname}`;

//   // h3.className = "card_title";

//   cardImg.append(img);
//   cardBody.append(h3, cardDesc);
//   card.append(cardImg, cardBody);

//   return card;
// }

// function displayData(data) {

//   datalistWrapper.innerHTML = "";

//   let cardList = document.createElement("div");
//   cardList.className = "card-list";

//   datalistWrapper.append(cardList);

//   data.forEach(item => cardList.append(createCard(item)));
// }


let paginationWrapper = document.getElementById("pagination-wrapper");
let datalistWrapper = document.getElementById("data-list-wrapper");

fetchData();

async function fetchData(page) {
  try {
    console.log(page);
    let res = await fetch(`${baseServerURL}/users?_page=${page}&_limit=10`);
    let total = res.headers.get("X-Total-count");
    let pageCount = Math.ceil(total / 10);
    paginationWrapper.innerHTML = "";
    for (let i = 1; i <= pageCount; i++) {
      paginationWrapper.append(createBtn(i));
    }
    let data = await res.json();

    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function createBtn(id) {
  let btn = document.createElement("button");
  btn.className = "pagination-button";
  btn.setAttribute("data-page-number", id);
  btn.textContent = id;
  btn.addEventListener("click", () => {
    fetchData(id);
  });
  return btn;
}

function createCard(item) {
  let card = document.createElement("div");
  card.setAttribute("data-id", item.id);
  card.className = "card";

  let cardImg = document.createElement("div");
  cardImg.className = "card_img";

  let cardBody = document.createElement("div");
  cardBody.className = "card_body";

  let cardDesc = document.createElement("div");
  cardDesc.className = "card_item card_description";
  cardDesc.textContent = item.email;

  let img = document.createElement("img");
  img.src = item.avatar;
  img.setAttribute("alt", `${item.firstname} ${item.lastname} image`);

  let h3 = document.createElement("h3");
  h3.className = "card_item card_title";
  h3.textContent = `${item.firstname} ${item.lastname}`;

  cardImg.append(img);
  cardBody.append(h3, cardDesc);
  card.append(cardImg, cardBody);

  return card;
}

function displayData(data) {
  datalistWrapper.innerHTML = "";

  let cardList = document.createElement("div");
  cardList.className = "card-list";

  datalistWrapper.append(cardList);

  data.forEach((item) => cardList.append(createCard(item)));
}
