## React Movie Search App

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Check the basic structure of the app is present or not - 1 mark
 ✅ Check if the movie search is working properly - 1 mark
 ✅ Check if debouncing in search is working properly - 3 marks
 ✅ Check whether we can search by year also - 3 marks
 ✅ Checking by the query is showing correct results - 1 mark
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

1. Make sure that the json-server is up and running at port `8080`
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url where ever you use `http://localhost:8080`
4. Use `axios`

### Not following the above instructions will lead your test cases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- Components
  - Dashboard.jsx
- App.js

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)

**Note** - `Make sure you use only the given data and don't create new data. Changing data might result in giving you zero marks`

## Features to build

1. Implement a search functionality from a movies database served from a json-server
2. Use params: `q` to perform a keyword search
3. Render the movie results on the dashboard according to the search made by the user
4. IMPORTANT: You need to implement debouncing with a delay of `1000ms`

<div>
<img src="https://i.imgur.com/jLzUAw1.png" width="100%" >
</div>

## App

1. It will just contain an `h1` tag with text content `Movie Search` and a `Dashboard` component.

## Dashboard

1. Here you will be seeing an `input` tag to enter the movie name with `placeholder` as `Search Movies` and also give attribute as `data-testid="search_key"`.
2. There will be a `div` with `data-testid = "movie_results"` where the movie results should be appended.

- Each movie result should be displayed with the following HTML elements.
  - `h3` tag with textContent as `Title: {title}` where `title` is the `title` of the movie.
  - `p` tag with textContent as `Year: {year}` where `year` is the `year` of the release of the movie.
  - The above `h3` and `p` tags should be wrapped inside a `div` with className `movie-card`.

3. You need to implement debouncing in search where the network request is placed with a `1000ms` delay when typing the input.
   - for eg. when the user types `apple` only 1 network request should be placed after `1000ms` however if the user types very slowly multiple requests will be made obviously

<div>
  <img src="https://i.imgur.com/Z4ljZdX.png" width="100%"/>
  <img src="https://i.imgur.com/gXw25Os.png" width="100%"/>
</div>

**Note**:- Use `query` params to get the results based on the `input` user provided.(The user may type either `name` or `year`, so use the `q` keyword in query params)

- refer to json server documentation for query params:- https://www.npmjs.com/package/json-server


**The problem is tested on CP**

<div>
<img src="https://i.imgur.com/BLzPvQJ.png" width="100%">
</div>

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for CSS in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this is used by testing tools to test your code, and removal of this will lead to a low score.
3. Make sure you use only the given components and don't create new files and folders as changing component names, or structures might result in giving you zero marks
4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
