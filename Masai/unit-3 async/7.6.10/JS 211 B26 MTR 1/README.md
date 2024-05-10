# JS201-B26-MTR-1 (big basket App)

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ Able to submit - 1 mark ( minimum score )
 ✅ Should have initial structure for index page as expected - 1 mark.

 ### Test cases for the addItem page
 ✅ Adding new item 1 - 1 mark.
 ✅ Adding new item 2 - 1 mark.
 ✅ Check if data added to dom successfully - 2 marks.
 ✅ Check if data added to local storage successfully - 1 mark.

 ### Test cases for index page
 ✅ Check total items in the navbar should increase as a new item is added - 1 mark.
 ✅ Check if search functionality working on the title of the item - 1 mark.
 ✅ Check delete functionality and dom updated after the item is deleted - 2 marks.
 ✅ Check if data in local storage "items" and "deleted_items" are successfully updated after deleting the item - 2 marks.

 ### Test cases for the deleted page
 ✅ Check if deleted page working expected - 1 mark.
 ✅ Check if the add again button working expected - 2 marks.
 ✅ Check if the local storage data of items updated successfully after addAgain - 2 marks.

 ### Test cases for edit functionality on the index page
 ✅ Check if the edit working as expected - 1 mark.
 ✅ Check edit part updated in local Storage successfully - 1 mark.
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

```
├── deleted.html
├── index.html
├── newItem.html
├── Scripts
|  ├── deleted.js
|  ├── index.js
|  └── newItem.js
└── Styles
   ├── deleted.css
   ├── index.css
   └── newItem.css
```

- Please ignore all the other files/folders except the above-mentioned ones.
- Styles folder include different style files add your CSS in these files.

### You haven't taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Build a big basket App where you can add all your grocery items.

- Your application has a Navbar (_this is already in the template no need to build it_).
  1. big basket Logo (index.html) anchor tag to Navigate `index.html`.
  2. newItem+(newItem.html) anchor tag to Navigate `newItem.html`.
  3. Deleted(deleted.html) anchor tag to Navigate `deleted.html`.
  4. Search functionality
  5. Total items part

### 1. Basic structure on Home Page (index.html) [1]:-

<img width="1727" src="https://i.imgur.com/N7bIhCR.png">

1. if items are not present in local Storage show the message `Add items / Result not found` in the `h1` tag with `id="items_not_found_text"`.

2. **Total items** must be updated with no .of items present by default it should be Total items:`0` has `id="total_items"`.

- **search and total items markup**

<img width="1727" src="https://i.imgur.com/pReJIJB.png">

- above search and total item’s part is already created in the template no need to build it, it is for understanding purposes.

### 2. newItem Page (newItem.html):-

- **newItem page markup**

<img width="1727" src="https://i.imgur.com/zm1AdL9.png">

- newItem page must include
- div with `id="newItem_container"` is already present add inputs/button as shown in the above markup and listed below

| input for | id            | type   |
| --------- | ------------- | ------ |
| Title     | new_title     | text   |
| Image URL | new_image_URL | `url`  |
| Price     | new_price     | number |
| Quantity  | new_quantity  | text   |

| button | id       |
| ------ | -------- |
| Submit | add_item |

- On clicking on submit button you should store item data in your local storage with the key `items`.

- `Example object `

```
   const item = {
      title: "Cadbury Oreo Original Vanilla Creme Biscuits",
      image_URL: "image url",
      price: 79,
      quantity: "288.75 g",
    };
```

follow the above object schema while storing new item's data in local storage.

`Hint: localStorage.setItem("items", JSON.stringify)`

- Refer to this image for a better understanding:-

<img width="1727" src="https://i.imgur.com/JK8ktoA.png">

### 3. The item on the index/Home page:-

- item must be added to dom and local storage and update total items part in navbar as Total items:`1`

<img width="1727"  src="https://i.imgur.com/vGzR4jt.png"/>
  <!-- <img width="1727"  src="https://i.imgur.com/pCDHEkX.png"/> -->


<span style="color: green">**Markup - elements, classes & IDs should be identical to the above screenshot.**</span>.


- Append the items to div with `id="items_container"`.

- The **card** with `div. card` having two child div

  1. The `div.card-img` in this image of the item is present.
  2. The `div.card-body` in this

  - h4 tag with `h4.card-title` **with title of item**.
  - p tag with `p.card-price` with the price of an item
  - p tag with `p.card-quantity` with the quantity of the item
  - button with `button. edit_btn` with `Edit` text
  - button with `button. delete_btn` with `Delete` text
  - div with `div.edit_div` with `style` **display:none** this div contain
    - input with `input.edit_price`
    - button `button.edit_submit_button` with `Submit` text

- Refer to this doc to understand how to work with input having type url - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url).

- UI for item

  <img src="https://i.imgur.com/qaqRKfX.png" height="350px"/>

### 4. Edit functionality on index/Home page:-

**item markup**

- on clicking the edit button the div with `id=edit_div` must be visible (use display="block") and again if we click Submit button the must not be visible (use display="none").
`Hint`:- use _div. style.display_ property.

  <img width="1727" src="https://i.imgur.com/o2Sf1Dg.gif"/>
  <!-- <img src="https://im3.ezgif.com/tmp/ezgif-3-a0b4de2216.gif"/> -->


- the edit div must contain

1. input for the value of a particular clicked item's price with `id="edit_price"`.

2. submit button with `id="edit_submit_btn"` you can refer to `item markup` screenshot for a better understanding

- if we updated the price after clicking submit button the dom should update, and also the local storage

- while editing/deleting a particular item you can use the hint given below

```
data.map((elem, i) => {
  // to catch particular element use i(index) while mapping data
})
```

### 5. Delete functionality on Index page:-

- if the user clicked on the delete button that particular item is removed from dom and local storage (from the `items` array).

- at the same time add that deleted item to local Storage with a new key as `deleted_items`.

`Hint:- localStorage.setItem("deleted_items", JSON.stringify(deleted_items))`

### 6. Search functionality on the Index page:-

- when the user adds text to the search input in the navbar with `id="Search"` and clicks the button search with `id="search_btn"` we will get the items whose ***`titles`*** contains search text .

- if not a single item's title having search text then show text with the h1 tag as `Add items / Result not found` in the `h1` tag with `id="items_not_found_text"`

<img width="1727" src="https://i.imgur.com/VHJqPUg.png">

**Hint**: while implementing search functionality first convert input text to `LowerCase` and then try to find if it is included in the title of the item you can refer to below links for a better understanding

1. [String.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
2. [String.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

### Example usage

```
let title = "Britannia Jimjam Sandwich biscuits" ;
let search_input_value = "Biscuits";
title.toLowerCase().includes(search_input_value.toLowerCase())
```

### 7. deleted page:-

<img width="1727" src="https://i.imgur.com/4bh1xcl.png">

- deleted page markup

<img width="1727" src="https://i.imgur.com/B8SB3lj.png">

<span style="color: green">**Markup - elements, classes & IDs should be identical to the above screenshot.**</span>.


- append all the `deleted_items` from local storage to `div#items_container`
- The **card** with `div. card` having two child div

  1. The `div.card-img` in this image of the item is present.
  2. The `div.card-body` in this

  - h4 tag with `h4.card-title` **with title of item**.
  - p tag with `p.card-price` with the price of an item
  - p tag with `p.card-quantity` with the quantity of the item
  - button with `button. addAgain_btn` with `Add again` text

- also on the top navbar update the total items status with total `no. of deleted items `.

- on clicking the **` Add again`** button the item is removed from the delete page dom and local Storage with key `deleted_items` and again added to local Storage with key `items ` and to dom of the index page.

- refer below to the local storage image for a better understanding.

<img width="1727" src="https://i.imgur.com/B0MlfjJ.png">
<img width="1727" src="https://i.imgur.com/0nWVci7.png">

#### The problem is tested on CP
<img width="1727" src="https://i.imgur.com/FgAMJ5O.png">

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
