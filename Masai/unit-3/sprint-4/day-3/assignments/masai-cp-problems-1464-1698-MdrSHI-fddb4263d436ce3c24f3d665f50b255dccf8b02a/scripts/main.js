// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

// =========================================================================
fetchData();
function fetchData() {
  fetch(bookURL)
    .then(res => res.json())
    .then(data => {
      booksData = data;
      console.log(data);
      appendData(data);
    })
    .catch(err => console.log(err))
}

function appendData(data) {
  mainSection.innerHTML = "";
  let cardList = document.createElement("div");
  cardList.className = "card-list";
  mainSection.append(cardList);
  data.forEach(ele => {
    cardList.append(createCard(ele));
  })
}

function createCard(book) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", book.id);

  let cardImg = document.createElement("div");
  cardImg.className = "card-img";
  let img = document.createElement("img");
  img.src = book.image;
  img.setAttribute("alt", "book");
  cardImg.append(img);
  // cardImg.classList.add("card-image");
  // cardImg.style.backgroundImage=book.image;
  card.appendChild(cardImg);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  let cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = book.title;
  cardBody.appendChild(cardTitle);

  let cardAuthor = document.createElement("p");
  cardAuthor.classList.add("card-author");
  cardAuthor.textContent = book.author;
  cardBody.appendChild(cardAuthor);

  let cardCat = document.createElement("p");
  cardCat.classList.add("card-category");
  cardCat.textContent = book.category;
  cardBody.appendChild(cardCat);

  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = book.price;
  cardBody.appendChild(cardPrice);

  let cardLink = document.createElement("a");
  cardLink.classList.add("card-link");
  cardLink.textContent = "Edit";
  cardLink.setAttribute("href", "#");
  cardLink.setAttribute("data-id", book.id);
  cardBody.appendChild(cardLink);

  let cardBtn = document.createElement("button");
  cardBtn.classList.add("card-button");
  cardBtn.textContent = "Delete";
  cardBtn.setAttribute("data-id", book.id);
  cardBody.appendChild(cardBtn);

  return card;
}

// updateBookBtn.addEventListener("click", (e) => {
//   e.preventDefault()
//   editData(updateBookIdInput.value)
// });
// function editData(id) {
//   fetch(`${bookURL}/${id}`,
//     {
//       method: "PUT",
//       body: JSON.stringify(
//         {
//           id: updateBookIdInput.value,
//           title: updateBookTitleInput.value,
//           image: updateBookImageInput.value,
//           author: updateBookAuthorInput.value,
//           category: updateBookCategoryInput.value,
//           price: updateBookPriceInput.value,
//         }
//       ),
//       headers: { "Content-type": "application/json" },
//     }).then(res => res.json()).then(data => { console.log(data); fetchData(); })
//     .catch(err => console.log(err))
// }
updateBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const id = updateBookIdInput.value;
  const title = updateBookTitleInput.value;
  const image = updateBookImageInput.value;
  const author = updateBookAuthorInput.value;
  const category = updateBookCategoryInput.value;
  const price = updateBookPriceInput.value;
  editData(id, { title, image, author, category, price });
});

function editData(id, data) {
  fetch(`${bookURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then(res => res.json())
    .then(data => { 
      console.log(data); 
      fetchData(); 
    })
    .catch(err => console.log(err));
}



sortAtoZBtn.addEventListener("click", async function () {
  try {
    let res = await fetch(`${bookURL}?_sort=price&_order=asc`)
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
})

sortZtoABtn.addEventListener("click", async function () {
  try {
    let res = await fetch(`${bookURL}?_sort=price&_order=desc`)
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
})



updateBookBtn.addEventListener("click", (e) => {
  e.preventDefault()
  editData1(updatePriceBookId.value)
});

function editData1(id) {
  fetch(`${bookURL}/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(
        {
          price: updatePriceBookPrice.value,
        }
      ),
      headers: { "Content-type": "application/json" },
    }).then(res => res.json())
    .then(data => { console.log(data); fetchData(); })
    .catch(err => console.log(err))
}