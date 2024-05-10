# 🌏 Masai World Tour 🛫
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```
## Maximum Marks - 15

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )
✅ Shows the correct initial data - 2 mark
✅ Sorts as expected - 1 mark
✅ Filters as expected - 1 mark
✅ Booking tickets initial message - 1 mark
✅ Booking tickets message on click of Book Now link - 3 marks
✅ cancel ticket button working as expected - 1 mark
✅ fetches and displays recipes - 1 mark
✅ fetches and displays employees  - 1 mark
✅ Alerts on click of greet link - 3 marks
```
### You haven't been taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

# Problem statements

### 1. List of tours on page load [2]
On page `load`, a list of all `tours` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Tour card list):
<!-- ![tourlistMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/232689218-82e09cf5-a6ce-4177-b7fc-1848085b65a5.png" width="100%"/>
- The `div.card` is a card appended to the div with `div.card-list` where all such cards are appended.

Expected markup (example single card div inside card-list div): 
<!-- ![tourMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/232683565-ad9085f5-3f49-457f-b73d-af1c515df0b7.png" width="100%"/>

- Markup - elements, classes & IDs should be identical to the above screenshot.

- The **Card** having two child div 
  1. The `div.card-image` in this image of the tour is present.
  2. The `div.card-body` in this 
    - h3 tag with `h3.card-title` **with location of tour as title**.
    - div with `div.card-description` 
    - anchor tag with `a.card-link` with Book Now text
       1. class= card-link
       2. href=#
       3. data-name= location of the tour **(Hint:data-name = JSON.stringfy(elem. location))** To get full location of the tour try to console the output for a better understanding.
    - div with `div.card-price` with the price of the tour as text

Expected UI (example card):
<!-- ![tourUI]() -->
<img src="https://user-images.githubusercontent.com/101581634/228950813-441bc8c3-1563-4616-80aa-7675e9f4f6df.png" width="100%"/>

Data mapping:
<!-- ![data+UI]() -->
<img src="https://user-images.githubusercontent.com/101581634/231255971-e37d838c-48c7-451b-af66-dc592891aa8e.png" width="100%"/>

- The data should be fetched from `${baseServerURL}/tours`
- The tours should be shown on page `load`

### 2. Sorting Tours based on Price [1]
- Sorting for `Low to High` UI:
<!-- ![sort]() -->
<img src="https://user-images.githubusercontent.com/101581634/228950792-ddbd14f3-32ef-4cc1-b7de-96baa0a74ecb.png" width="100%"/>

With the click of the button `#sort-low-to-high`, the tour list should be sorted in ascending order based on their price.

With the click of the button `#sort-high-to-low`, the tour list should be sorted in descending order based on their price.

You may use any approach of your choice for sorting. You may sort the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

### 3. Filtering Tours based on the type [1]
- Filtering for `International` UI:
<!-- ![InterNational]() -->

<img src="https://user-images.githubusercontent.com/101581634/228950913-ee0a9710-e02a-4e86-912c-bc7797332004.png" width="100%"/>

When the button `#filter-National-tours` is clicked, the tour list is expected to be filtered. It should only show the tours whose `type` is ***`National`***.

When the button `#filter-International-tours` is clicked, the tour list is expected to be filtered. It should only show the tours whose `type` is ***`International`***.

You may use any approach of your choice for filtering. You may filter the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).

#### **Note: the `sort` and the `filter` functionality is just for the ***tours***. You don't need to worry about sorting & filtering recipes & employees.**

### 4.  Booking tickets initial message [1]
- div `class.card` and id `ticket-book-card` is already present you have to add text on default load as ***`BOOKING STATUS : NOT booked yet!`***

<!-- ![NOTBooking2]() -->
<img src="https://user-images.githubusercontent.com/101581634/232683545-420fe2c1-005b-485f-942e-f8f673d40394.png" width="100%"/>

### 5. Booking tickets message on click of Book Now link [3]
- on clicking Book Now link you have to change the text to 
"Ticket Booking for : `<tour location>`!"

<!-- ![BookNowClick](https://user-images.githubusercontent.com/101581634/228950838-37914638-a5bb-4122-af88-9cff48a3bec4.png) -->
<!-- ![BookNowClick2]() -->
<img src="https://user-images.githubusercontent.com/101581634/230533806-a57fc23c-e65a-4ff9-b9b0-97dac52d5adc.png" width="100%"/>


### 6. cancel ticket button working as expected [1]
- on clicking ***Cancel Ticket*** button with id `cancel-ticket`
the text will changed to ***`BOOKING STATUS : NOT booked yet!`***

### 7. Fetch & Display Recipes [1]

On click of the button `#fetch-recipes`, A list of ***25*** `recipes` should be displayed in the `div#data-list-wrapper`

Screenshot UI: 
<!-- ![recipeUI2](https://user-images.githubusercontent.com/101581634/229032136-b69ed670-0dc4-49e2-907d-ede4136047aa.png) -->
<!-- ![recipeUI3]() -->
<img src="https://user-images.githubusercontent.com/101581634/230533808-713d8b79-39ab-4740-89c4-88fac56c1a7b.png" width="100%"/>

Screenshot Markup: 
<!-- ![RecipeMarkUp2]() -->
<img src="https://user-images.githubusercontent.com/101581634/232683551-2f9db576-63ec-417f-87a5-024b5363135f.png" width="100%"/>

- You need to make a request to `${baseServerURL}/recipes`
- The markup should exactly match the screenshot
- The markup looks slightly different from the Tour's card
- Here, the `price` is placed inside `.card-description`.
- By default, on page `load`, Tours will be shown, only on the `button#fetch-recipes` click the recipes will be shown.  
- Only the first 25 results should be *fetched* & *shown*
- You may refer to the [JSON Server documentation](https://github.com/typicode/json-server)

### 8. Fetch & Display Employees [1]
On click of the button `fetch-employees`, all the `employees` should be displayed in the `div#data-list-wrapper`

Screenshot: 
<!-- ![employeeMarkUp]() -->
<img width="100%" src="https://user-images.githubusercontent.com/101581634/232683530-b4d070c9-e08b-4418-b0a4-c96df8d6ea2c.png"/>

- `${baseServerURL}/employees`
- The employee `name` is placed in `div.card-title`
- The `div.card-description` contains `salary``
- The card also contains a link with the text `Greet`
- The page does not refresh on the click of the link

### 9. Alert on click of greet link [3]
- On the click of the `greet` link, an alert is shown as the following screenshot.

<!-- ![alert]() -->
<img src="https://user-images.githubusercontent.com/101581634/228950827-06a7e10b-49b0-45e1-ac71-44fbcd5b90c8.png" w="100%"/>

- The alert contains string "Greetings from `<employee full name>`!";

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
