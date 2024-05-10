## React Library Management

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 23

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Should have basic structure (Home Page)  - 2 mark
 ✅ Should have basic structure (Section Page(History)) - 2 marks
 ✅ Should have basic structure (Book Details Page) - 2 marks
 ✅ Should render all books in home page - 2 marks
 ✅ Should render all books in History page - 2 marks
 ✅ Should render all books in Mystery page - 2 marks
 ✅ Should render all books in Mythology page - 2 marks
 ✅ Should render all books in technology page - 2 marks
 ✅ Should have section route - 2 marks
 ✅ Should have Book Details Page route - 2 marks
 ✅ Should have not found 404 route - 2 marks
```

## Installation
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries needs to be installed by yourself
2. Make sure that the json-server is up and running at port `8080`
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url where ever you use `http://localhost:8080`

### Not following the above instructions will lead your testcases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- Components
  - Home (should be rendered on default route "/")
  - Navabr (should be rendered on every route)
  - SectionPage (should be rendered on default route "/section/:section")
  - BookDetailsPage (should be rendered on default route "/bookdetailspage/:id")
  - InvalidPage (should be rendered on any invalid route)
- Routes
 - AllRoutes
- App.js

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Books should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and dont create new data. Changing data might result in giving you zero marks`

## Features to build

 1. Create a library management system in react
 
 2. Library has following books sections:
   - Mystery
   - Technology
   - Mythology
   - history
   
 3. Every book has these values
   - Title
   - Author
   - Description
   - Price
   - Section
   - ISBN number (random number)
 
 4. When user lands on the page, show him the list of all books as a card. Each card shows only book's title, price and author
 
 5. Each page in this application should have a navbar to navigate between all four sections mentioned above
 
 6. Clicking a section should redirect the user to section/:section page where the books of only that section should be rendered
 
 7. When user clicks on the card, take user to book details page
   - show all details about book on this page
   - use styled components to make book card
   - use react router to create routes
   - using any UI library like material ui or ant design or bootstrap is acceptable as long as you are keeping given cards intact.
   
 8. Render the InvalidPage component with  text "No Page Found" if any invalid url is passed
 
<img width="1726" alt="Screenshot 2022-12-13 at 7 20 35 PM" src="https://user-images.githubusercontent.com/39851506/207384067-3594c8f8-55ab-4e54-9e52-0f57fa5ba8d7.png">

<img width="1721" alt="Screenshot 2022-12-13 at 7 17 28 PM" src="https://user-images.githubusercontent.com/39851506/207383691-7d8990c2-68b1-4d62-b450-30e728625858.png">

<img width="1728" alt="Screenshot 2022-12-13 at 7 17 12 PM" src="https://user-images.githubusercontent.com/39851506/207383732-acb2ff92-3cb2-4307-a015-e89d694918c0.png">

<img width="1724" alt="Screenshot 2022-12-13 at 7 17 19 PM" src="https://user-images.githubusercontent.com/39851506/207383716-ae8d5688-b5e2-408c-8f07-1cce14d0316b.png">


## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
