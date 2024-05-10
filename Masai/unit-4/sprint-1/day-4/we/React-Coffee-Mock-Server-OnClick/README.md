# React Coffee Mock Server OnClick

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should have a correct heading - 2 marks
 ✅ should make GET request and render coffee data - 3 marks
 ✅ should show the correct image - 1 mark
 ✅ should show the correct title - 1 mark
 ✅ should show correct description - 1 mark
 ✅ should show the correct ingredient - 1 mark

```

## Installation

- Use node version 16.16.0
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries need to be installed by yourself
2. Make sure that the json-server is up and running at port `8080`
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url where ever you use `http://localhost:8080`

### Not following the above instructions will lead your test cases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- pages
  - Coffee.jsx
- component
  - CoffeeCard.jsx
- App

## App.js

- show the heading `Coffee Store Catalogue` in the h1 tag

## Coffee.jsx

- Create a button `Get Coffee` 
- On clicking the button make an API request to the server and map data inside CoffeeCard.jsx

<img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/225320189-02a7e4bf-d140-4fed-913c-3fb094c9eb6e.png">

## CoffeeCard.jsx

- every coffee card should have the following information
- div inside the below data is shown
- show the image in `img` tag
- show title in h2 with classname `title`
- show the price in a p tag with classname `price`
- show the description in a p tag with classname `description`
- show ingredient in li inside ul (classname = `ingredient`)

<img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/225320175-df814c32-53b6-45de-85d3-ca0a5065c6cc.png">

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Products should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and do not create new data. Changing data might result in giving you zero marks`

## Features to build (use Fetch)

1. Create a react application for the online coffee catalog

2. Use mock json server to maintain the data of the coffee catalog

3. use fetch for getting data

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for CSS in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to a low score.
3. Make sure you use only the given components and don't create new files and folders as changing the component name, or structures might result in giving you zero marks
4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
