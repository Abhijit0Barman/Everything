// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const pitchURL = `${baseServerURL}/pitches`;
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");
// ============================================================
pitchCreateBtn.addEventListener("click", postData)
updatePitchBtn.addEventListener("click",reUpdateData)
updatePricePitchPriceButton.addEventListener("click",updatePrice);
sortAtoZBtn.addEventListener("click",()=>{fetchData(`${pitchURL}?_sort=price&_order=asc`)});
sortZtoABtn.addEventListener("click",()=>{fetchData(`${pitchURL}?_sort=price&_order=desc`)});
filterFood.addEventListener("click",()=>{fetchData(`${pitchURL}?category=Food`)});
filterElectronics.addEventListener("click",()=>{fetchData(`${pitchURL}?category=Electronics`)});
filterPersonalCare.addEventListener("click",()=>{fetchData(`${pitchURL}?category=Personal Care`)});
searchByButton.addEventListener("click",()=>{fetchData(`${pitchURL}?${searchBySelect.value}_like=${searchByInput.value}`)});



// ============================================================
fetchData(pitchURL)
function fetchData(url) {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data)
    displayData(data)
  }).catch(error => { console.log(error) })
}

function displayData(data) {
  mainSection.innerHTML = "";
  let card_list = document.createElement("div");
  card_list.className = "card-list";

  data.forEach(item => { card_list.append(createCard(item)) });
  mainSection.append(card_list);
}

function createCard(item) {
  let card = document.createElement("div");
  let card_img = document.createElement("div")
  let card_body = document.createElement("div")
  let img = document.createElement("img")
  let card_title = document.createElement("h4")
  let card_founder = document.createElement("p")
  let card_category = document.createElement("p")
  let card_price = document.createElement("p")
  let card_link = document.createElement("a")
  let card_button = document.createElement("button")

  card.className = "card";
  card.dataset.id = item.id;
  card_img.className = "card-img";
  img.src = item.image;
  img.alt = "pitch";
  card_body.className = "card-body";
  card_title.className = "card-title";
  card_title.innerText = item.title;
  card_founder.className = "card-founder";
  card_founder.innerText = `Founder: ${item.founder}`;
  card_category.className = "card-category";
  card_category.innerText = item.category;
  card_price.className = "card-price";
  card_price.innerText = item.price;
  card_link.className = "card-link";
  card_link.href = "#";
  card_link.dataset.id = item.id;
  card_link.innerText = "Edit";
  card_link.addEventListener("click", () => { updateData(item) })

  card_button.className = "card-button";
  card_button.dataset.id = item.id;
  card_button.innerText = "Delete";
  card_button.addEventListener("click", () => { deleteData(item.id) })

  card_img.append(img);
  card_body.append(card_title, card_founder, card_category, card_price, card_link, card_button);
  card.append(card_img, card_body);

  return card;
}


async function postData() {
  try {
    let res = await fetch(pitchURL, {
      method: "POST",
      headers: { "Content-type": "application/json", },
      body: JSON.stringify({
        "title": pitchTitleInput.value,
        "price": pitchPriceInput.value,
        "founder": pitchfounderInput.value,
        "category": pitchCategoryInput.value,
        "image": pitchImageInput.value
      })
    });
    fetchData(pitchURL);
  } catch (error) {
    console.log(error);
  }
}

async function deleteData(id) {
  try {
    let res = await fetch(`${pitchURL}/${id}`, {
      method: "DELETE",
    });
    fetchData(pitchURL);
  } catch (error) {
    console.log(error);
  }
}

function updateData(item) {
  event.preventDefault();
  updatePitchIdInput.value = item.id;
  updatePitchTitleInput.value = item.title;
  updatePitchImageInput.value = item.image;
  updatePitchCategoryInput.value = item.category;
  updatePitchfounderInput.value = item.founder;
  updatePitchPriceInput.value = item.price;

  updatePricePitchId.value = item.id;
  updatePricePitchPrice.value = item.price;
}

async function reUpdateData() {
  try {
    let res = await fetch(`${pitchURL}/${updatePitchIdInput.value}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json", },
      body: JSON.stringify({
        "title": updatePitchTitleInput.value,
        "price": updatePitchPriceInput.value,
        "founder": updatePitchfounderInput.value,
        "category": updatePitchCategoryInput.value,
        "image": updatePitchImageInput.value
      })
    });
    fetchData(pitchURL);
  }
  catch (error) {
    console.log(error);
  }
}


async function updatePrice() {
  try {
    let res = await fetch(`${pitchURL}/${updatePitchIdInput.value}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json", },
      body: JSON.stringify({
        "price": updatePricePitchPrice.value,
      })
    });
    fetchData(pitchURL);
  }
  catch (error) {
    console.log(error);
  }
}