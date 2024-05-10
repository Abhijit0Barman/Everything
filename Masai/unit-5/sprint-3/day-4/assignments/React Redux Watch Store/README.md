## React-Redux-watch-store

#### Problem Statement

Create the following application: Products Page using the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 13

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check Initial Redux Store Structure  - 2 marks
 ✅ Check if proper GET request and response is made- 1 mark
 ✅ Check if the number of cards displayed is 15 - 1 mark
 ✅ Check if the Card component contains all the required information(image,name) - 2 mark
 ✅ Check if the user is redirected to login page before visiting /watch/1, without authentication - 2 marks
 ✅ Check if Filters are working with updating single data - 2 marks
 ✅Check if Filters are working with updating multiple data on changing category - 1 mark
 ✅Check if the Filter search params are working with initial checks in URL - 1 mark


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
2. Make sure that the json-server is up and running at port 8080
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
4. You need to restart the react server once th env file is updated.
5. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

#### Steps

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to use Authentication, for Private Routes
- Ability to get filtered data, using JSON-server

### Understanding Component Structure

- App
  - Navbar
  - MainRoutes
    - Path: “/”, Page: Watches (Public Route)<br/> - Filter.jsx<br/> - WatchCard.jsx
    - Path: “/login”, Page: Login (Public Route)
    - Path: “/watches/:id”, Page: SingleWatch (Protected Route/Page, accessible after logging in)

### Redux

- Store
  - AppReducer (logic related to watch data)
  - AuthReducer (logic related to user login/authentication)

**NOTE**: Redux is mandatory for this application

1. Use the provided ActionTypes and DO NOT change the initial state in the reducer file.
2. Some of the boilerplate is provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
3. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial watches data. **Do not overwrite/modify this data**

### Features to build:

1. The user should be able to fetch the watch data from the db.json file (using JSON-server, axios, Redux-thunk) and display the data when the application loads.
2. The data received from API calls should be stored in the Redux store.
3. Use the watch data from redux store to display in the Watches component.
4. ‘/watches/:id’ : “SingleWatch” is a protected route. Make sure that it is accessible only after logging in. Use https://reqres.in for login API.
5. Post `login`, the user should be redirected to the page, he was initially present, i.e<br/> - If the user went to the login page, from homepage(Watches), then after successful login he should be redirected to homepage(Watches)<br/> - If the user went to the login page, trying to access `SingleWatch`, then after successful login he should be redirected to `SingleWatch`
6. The user should be able to implement the filter functionality, based on the watches category.<br/> - The search params should be updated with change in filter category selection.<br/> - The data should reflect the selected filters. An API call with the filter/category params should be made to GET the watches data from db.json, using JSON-server<br/> - Also, ensure the selected filter/category persists even with page refresh.

- ![](https://i.imgur.com/HKFX7hZ.png)
- ![](https://i.imgur.com/Nt98vNY.png)

### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
