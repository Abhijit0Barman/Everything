# 🏆Masai Premier League(MPL)🏏
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
.
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```
## Maximum Marks - 15

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
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
✅ Fetches and displays recipes - 1 mark
✅ Fetches and displays employees  - 1 mark
✅ Alerts on click of greet link - 3 marks
```
### You haven't been taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given ids or classes.</span>
- If you don't follow these rules you might not get any marks even if you do everything correctly.

# Problem statements
Your task is to build an app **Masai Premier League(MPL)** where on clicking the BOOK NOW link user can book the ticket for the match, status should update in the top div. The user can cancel the ticket as per the explanation below.
### 1. List of matches on page load [2]
On page `load`, a list of all `matches` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Match card list):
<!-- ![matchListMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/232698335-80d8535c-4f7e-4ff0-9392-ba1406e80cfd.png" width="1727"/>

- The `div.card` is appended  `div.card-list`.
where all such cards are appended.

Expected markup (example single card div inside card-list div): 
<!-- ![matchMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/232699676-44830e07-128d-4467-a531-e930f4946caf.png" width="1727"/>

- Markup - elements, classes & IDs should be identical to the above screenshot.

- The **Card** having two child div 

  1. The `div.card-image` in this image of the match is present.
  - while implementing image functionality<span style=" color: green"> for (matches/employees/recipes)</span> use baseServerURL before the image for better understanding explore the below example. 
  - baseServerURL is already added in the template main.js file.

      ```
       let data = [
         {
           "id": 1,
           "image": "/images/teamsLogo/csk.jfif",
           "name": "Chennai Super Kings",
           "captain": "M. S. Dhoni",
           "price": 55000
         }
       ]

       <img src=${baseServerURL}/images/teamsLogo/csk.jfif />
      ```
      
  2. The `div.card-body` in this 
    - h3 tag with `h3.card-title` **with name of match as title**.
    - div with `div.card-description` **with captain of match as description**.
    - anchor tag with `a.card-link` with BOOK NOW text
       1. class= card-link
       2. href=#
       3. data-name= name of the match (Hint:data-name = JSON.stringfy(elem. name)) To get the full name of the match try to console the output for a better understanding.
    - div with `div.card-price` with the price of the match as text


Expected UI (example card):
<!-- ![matchUI]() -->
<img src="https://user-images.githubusercontent.com/101581634/230022325-f3bafe85-985e-4a19-af07-641069872df2.png" width="1727"/>

Data mapping:
<!-- ![data+ui]() -->
<img src="https://i.imgur.com/rrp2iKd.png" width="1727"/>

- The data should be fetched from `${baseServerURL}/matches`
- The matches should be shown on page `load`

### 2. Sorting Matches based on Price [1]
- Sorting for `Low to High` UI:
<!-- ![sorting]() -->
<img src="https://user-images.githubusercontent.com/101581634/230022334-a261cdef-0607-423c-8c69-f7d008885224.png" width="1727"/>

With the click of the button `#sort-low-to-high`, the match list should be sorted in ascending order based on their price.

With the click of the button `#sort-high-to-low`, the match list should be sorted in descending order based on their price.

You may use any approach of your choice for sorting. You may sort the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

### 3. Filtering Matches based on the price [1]
- Filtering for `filter-Less-Than-20thousand` UI:
<!-- ![filtering]() -->

<img src="https://user-images.githubusercontent.com/101581634/230022307-5ff61858-c5c4-4731-a4a9-b198fcaa3d4f.png" width="1727"/>

When the button `#filter-Less-Than-20thousand` is clicked, the match list is expected to be filtered. It should only show the matches whose `price` is ***`less than 20 thousand`***.

When the button `#filter-More-Than-20thousand` is clicked, the match list is expected to be filtered. It should only show the matches whose `price` is ***`more than and equal to 20 thousand`***.

You may use any approach of your choice for filtering. You may filter the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).

***<span style=" color: green"> Note: the `sort` and the `filter` functionality is just for the **`matches`**. You don't need to worry about sorting & filtering recipes & employees. </span>.***

### 4.  Booking tickets initial message [1]
- div `class.card` and id `ticket-book-card` is already present you have to add text on default load as ***`BOOKING STATUS : NOT booked yet!`***

<!-- ![NOTBooking2]() -->
<img src="https://user-images.githubusercontent.com/101581634/232698361-3062bceb-17ab-4132-a575-4eb6de7fcf79.png" width="1727"/>

### 5. Booking tickets message on click of Book Now link [3]
- on clicking Book Now link you have to change the text to 
"Ticket Booking for : `<match name>`!"

<!-- ![BookNowClick](https://user-images.githubusercontent.com/101581634/228950838-37914638-a5bb-4122-af88-9cff48a3bec4.png) -->
<!-- ![BookNowClick2]() -->
<img src="https://user-images.githubusercontent.com/101581634/230709548-1287ff45-a385-4788-b368-189193df5d11.png" width="1727"/>

### 6. cancel ticket button working as expected [1]
- on clicking ***Cancel Ticket*** button with id `cancel-ticket`
the text will change to ***`BOOKING STATUS : NOT booked yet!`***

### 7. Fetch & Display Recipes [1]

On click of the button `#fetch-recipes`, A list of ***10*** `recipes` should be displayed in the `div#data-list-wrapper`

Screenshot UI: 
<!-- ![recipeUI2](https://user-images.githubusercontent.com/101581634/229032136-b69ed670-0dc4-49e2-907d-ede4136047aa.png) -->
<!-- ![recipeUI3]() -->
<img src="https://user-images.githubusercontent.com/101581634/230533808-713d8b79-39ab-4740-89c4-88fac56c1a7b.png" width="1727"/>

Screenshot Markup: 
<!-- ![RecipeMarkUp2]() -->
<img src="https://user-images.githubusercontent.com/101581634/232683551-2f9db576-63ec-417f-87a5-024b5363135f.png" width="1727"/>

- You need to make a request to `${baseServerURL}/recipes`
- The markup should exactly match the screenshot
- The markup looks slightly different from the match's card
- Here, the `price` is placed inside `.card-description`.
- By default, on page `load`, matches will be shown, only on the `button#fetch-recipes` click the recipes will be shown.  
- Only the first 10 results should be *fetched* & *shown*
- You may refer to the [JSON Server documentation](https://github.com/typicode/json-server)

### 8. Fetch & Display Employees [1]
On click of the button `fetch-employees`, all the `employees` should be displayed in the `div#data-list-wrapper`

Screenshot: 
<!-- ![employeeMarkUp]() -->
<img width="1727" src="https://user-images.githubusercontent.com/101581634/232683530-b4d070c9-e08b-4418-b0a4-c96df8d6ea2c.png"/>

- `${baseServerURL}/employees`
- The employee `name` is placed in `div.card-title`
- The `div.card-description` contains `salary`
- The card also contains a link with the text `Greet`
- The page does not refresh on the click of the link

### 9. Alert on click of greet link [3]
- On the click of the `greet` link, an alert is shown as the following screenshot.

<!-- ![alert]() -->
<img src="https://user-images.githubusercontent.com/101581634/230056048-25d151dc-7cdc-4714-acba-201b79347f99.png" w="100%"/>

- The alert contains the string "Greetings from `<employee full name>`!";

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.