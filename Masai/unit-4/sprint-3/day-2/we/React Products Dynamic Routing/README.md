**Note**: Use of hook (useParams) is mandatory for this assignment

## React Products Dynamic Routing

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if all products are vsiible on products page  - 2 mark
 ✅ Check if only selected product are vsiible on product details page - 3 marks
 ✅ Check if application is routing to product details page- 1- 2 marks
 ✅ Check if application is routing to product details page -2 - 2 marks

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

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

- App
  - AllProducts (should be rendedered on default route "/")
  - ProductDetails (should be rendered on route "/products/:id)
  - AllRoutes (will handle component rendering for different routes)

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Products should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and dont create new data. Changing data might result in giving you zero marks`

## Features to build

1. Display all products (their names, id, and prices) on "/" default page
2. On clicking any one product the user should redirected to product details page with url "/products/:id

   - the name of the product should have data-testid = `product_name`
   - the price of the product should have data-testid =`product_price`

3. Display the specific product details on product details by retrieving the id from the url and fetching data using the same

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
