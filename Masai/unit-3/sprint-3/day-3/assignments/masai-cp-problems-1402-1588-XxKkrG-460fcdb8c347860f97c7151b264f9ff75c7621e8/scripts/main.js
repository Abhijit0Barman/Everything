// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// use base url from the above to make api call for different end points

// append data your coffee card to mainSection below
let mainSection = document.getElementById("data-list-wrapper");

// `${baseServerURL}/coffee`  ---> url to fetch
// =====================================================

async function fetchCoffeeData() {
  try {
    const response = await fetch(`${baseServerURL}/coffee`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayCoffeeData() {
  const coffeeData = await fetchCoffeeData();

  const cardListDiv = document.createElement('div');
  cardListDiv.classList.add('card-list');

  coffeeData.forEach(coffee => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card__image');

    const cardImage = document.createElement('img');
    cardImage.src = coffee.image;

    const cardContentDiv = document.createElement('div');
    cardContentDiv.classList.add('card__body');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = coffee.title;

    const cardIngredients = document.createElement('ul');
    coffee.ingredients.forEach(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = ingredient;
      cardIngredients.appendChild(ingredientItem);
    });

    cardImageDiv.appendChild(cardImage);
    cardContentDiv.appendChild(cardTitle);
    cardContentDiv.appendChild(cardIngredients);
    cardDiv.appendChild(cardImageDiv);
    cardDiv.appendChild(cardContentDiv);
    cardListDiv.appendChild(cardDiv);
  });

  const dataListWrapper = document.getElementById('data-list-wrapper');
  dataListWrapper.appendChild(cardListDiv);
}

displayCoffeeData();
