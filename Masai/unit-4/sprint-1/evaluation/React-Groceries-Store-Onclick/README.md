<h1 style="color:#397ce7">
React Groceries List
</h1>

<h2 style="color:#397ce7">
Submission Instructions [Please note]
</h2>

<h2 style="color:red">
Maximum Marks - 16
</h2>

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ able to submit the app - 1 mark ( minimum score )
✅ heading should be visible when component loads - 1 mark
✅ should make a get request to endpoint - 2 marks
✅ should show loading indicator while api request is in progress - 1 mark
✅ Check all products are visible - 1 mark.
✅ Check all name of the product are displayed - 1 mark
✅ Check all price of the product are displayed - 1 mark
✅ Check all image of the product are displayed - 1 mark
✅ Add to Cart button should be visible by default - 1 mark.
✅ on clicking Add to Cart button quantity should be incremented by 1 and CartButtons should be rendered(+ and - button) - 2 marks.
✅ increment and decrement quantity buttons should work" - 2 marks.
✅ if quantity goes below 1 Add to Cart button should be visible and decrement and increment buttons should not be visible - 2 marks

```

<h2 style="color:red">
Installation:-
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Clone the repository to your local machine.
- Install the required dependencies by running `npm install --engine-strict`.
- Start the development server using `npm start`.
- The system on cp.masaischool.com may take between 1-20 minutes for responding, So we request you to read the problem carefully and debug before itself.
- We also request you to not to just submit it last minute try to keep one submission at a time.

<h2 style="color:red">
API Endpoint:-
</h2>

- `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`

<h2 style="color:#397ce7">
Problem Description:-
</h2>

- Create a grocery store interface with the ability to display products, increment and decrement their quantities, and add them to the cart.

<h2 style="color:#397ce7">
Folder Structure:-
</h2>

```
├── App.css
├── App.js
├── Components
|  ├── AddToCartButton.jsx
|  ├── Groceries.jsx
|  ├── GroceryItem.jsx
|  ├── LoadingIndicator.jsx
|  └── QuantityButton.jsx
├── index.css
└── index.js
```

<h2 style="color:#397ce7">
Component Structure:-
</h2>

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/uGrcWxR.png" width="100%">
<figcaption align = "center"><b>Fig.1 - Component Structure</b></figcaption>
</figure>

<h2 style="color:#397ce7">
Components:-
</h2>

<h3 style="color:#397ce7">
1. App.js :-
</h3>

- Import the `Groceries.jsx` component and render it.

<h3 style="color:#397ce7">
2. Groceries.jsx :-
</h3>

- A div container with `className="grocery_container"` already given in the boilerplate implement following functionalities inside it :-

  - Render an `h1 tag` with `Groceries` as the title.
  - Display a `Get Groceries` button with `className="get-groceries-btn"`.
  - The button is only visible if the products are not shown and vice versa.
  - On clicking the `Get Groceries` button, data is fetched from the `above given API endpoint`.
  - While the request is in progress show `only` `LoadingIndicator.jsx` component(refer Fig-3 for reference).
  - If request is successfully completed then map received data into the `GroceryItem.jsx` inside a `div` tag with `data-cy="grocery-items-container"` to display all the product details as cards(refer Fig-4 for reference).

<figure style="border: 1px solid gray; ">
<img src="https://user-images.githubusercontent.com/103956933/222460282-bdbf7fa8-c3cc-46fc-92a3-3ef533114d80.png" width="100%">
<figcaption align = "center"><b>Fig.2 - Landing page with `Get Groceries` button</b></figcaption>
</figure>

<h3 style="color:#397ce7">
3. LoadingIndicator.jsx :-
</h3>

- You can use useState to manage loading state.
- While api request is in progress show `only` this loading indicator component.
- A `div` with `className="loading-indicator"` is already given.
- Render text content `Loading...` inside a `h1` tag in above given `div` with `className="loading-indicator"`

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/cjpZVWY.png" width="100%">
<figcaption align = "center"><b>Fig.3 - Loading Indicator</b></figcaption>
</figure>

<figure style="border: 1px solid gray; ">
<img src="https://user-images.githubusercontent.com/103956933/222422801-ef504edf-f50c-4ced-b585-44a5406a1950.jpg" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page with all groceries items</b></figcaption>
</figure>

<h3 style="color:#397ce7">
4. GroceryItem.jsx :-
</h3>

- This component accepts each product's details (image, name, price) as props.
- Create a `div` tag with `className="grocery_card"` and displays all the properties of the given product (image, name, price).
- The image is shown in an `img` tag, the name in an `h3` tag, and the price in an `h5` tag.
- By default all the GroceryItem will have quantity set to zero and this is maintained using useState and Each of the GroceryItem will render AddToCart component by default. ( Details about AddToCart component is mentioned in the AddToCart section below ).
- As soon as user clicks on AddToCart button. The quantity increases by 1 and the whenever the value of quantity is greater than zero, QuantityButton component should be rendered. ( Details about QuantityButton component is mentioned in the QuantityButton section below ).
- So basically you conditionally render either AddToCart component or QuantityButton component basis the quantity. if quantity is 0 render AddToCart component, otherwise render QuantityButton component. 

<h3 style="color:#397ce7">
5. AddToCartButton.jsx :-
</h3>

- Create a `button` with text content `Add to Cart` with `data-cy="add-to-cart-btn"`.
- The state is managed using useState for count of cart, and the initial cart count is set to 0.
- When clicking the `Add to Cart` button, the `QuantityButton.jsx` component is conditionally rendered with the quantity set to 1.


<figure style="border: 1px solid gray; ">
<img src="https://user-images.githubusercontent.com/103956933/222462554-fa9a3d62-e49c-40f4-9c08-23f44cfb804c.jpg" width="100%">
<figcaption align = "center"><b>Fig.5 - Ui after clicking `Add To Cart` button</b></figcaption>
</figure>

<h3 style="color:#397ce7">
6. QuantityButton.jsx :-
</h3>

- Create a `div` tag with `className="quantity_container"`.
- The above div includes:

  - An increment button (with text content as `+`) with `data-cy="inc_btn"`.
  - A decrement button (with text content as `-`) with `data-cy="dec_btn"`.
  - A p tag with `className="quantity"` to display the quantity.
  - You can increment or decrement the quantity by clicking the `+` and `-` buttons.
  - If the quantity goes below 1, the `Add to Cart` button is displayed again, and the `QuantityButton.jsx` component is hidden.

- For a better understanding, you can refer to the JioMart website - https://www.jiomart.com/all-topdeals.

<h2 style="color:red">
Note:-
</h2>

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.
<h2 style="color:red">
General Guidelines:-
</h2>

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
