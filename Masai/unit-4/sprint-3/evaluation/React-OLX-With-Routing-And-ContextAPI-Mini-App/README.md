# React-OLX-With-Routing-And-ContextAPI-Mini-App

## Maximum Marks - 18

### Submission Instructions [Please note]

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Check the Initial structure of authProvider - 1 mark
 ✅ Check home page is having a basic structure with Navbar and ProductCard's components present- 1 mark
 ✅ Home page is rendering all the products by using ProductCard component on page load - 2 marks
 ✅ Should be able to log in with correct credentials and email is getting updated on Navbar - 2 marks
 ✅ Navbar is working as per the problem statement.(contain all the required HTML elements & login button is getting changed to new logout button after login) - 1 mark
 ✅ Whether some of the routes are protected as mentioned in the problem statement - 2 marks
 ✅ Check whether any clicking on any ProductCard on the home page is redirecting us to the ProductDetails page - 2 marks
 ✅ Check product details page renders all the details as mentioned in the problem statement - 2 marks
 ✅ Loader component should exist between the API req and res from the json server - 2 marks
 ✅ Check navBar login link and logout button are working fine and context API has also Updated accordingly - 2 marks
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

1. Make sure that the json-server is up and running at port 8080
2. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

## Problem Statement

Create a user-friendly website like **OLX** for selling products, with the following functionalities:

1. **Login**: Implement a secure login system by authenticating user credentials.

2. **Product Listing**: Enable users to showcase their products for sale on the website. This feature allows sellers to provide detailed information, such as product descriptions, prices, and images.

By incorporating these functionalities, we aim to create a vibrant and user-friendly platform that simplifies the process of buying and selling products, enhancing the overall user experience.

### Understanding Component Structure

```
├── src
|  ├── App.css
|  ├── App.js
|  ├── App.test.js
|  ├── Components
|  |  ├── Loading.jsx
|  |  ├── Navbar.jsx
|  |  └── ProductCard.jsx
|  ├── Context
|  |  └── AuthContext.jsx
|  ├── index.css
|  ├── index.js
|  ├── logo.svg
|  ├── Pages
|  |  ├── Home.jsx
|  |  ├── Login.jsx
|  |  └── ProductDetailsPage.jsx
|  ├── reportWebVitals.js
|  ├── Routes
|  |  ├── AllRoutes.jsx
|  |  └── PrivateRoute.jsx
```

**_Note_**

<div style="color:green">
<ol>
  <li>Context API is mandatory for this application and uses `fetch` only.</li>
  <li>Use fetch Only.</li>
  <li>Follow the order of HTML elements as mentioned in the problem statement. Refer to the snapshots provided</li>
  <li>Reset the form after form submission, and use onSubmit to submit the form</li>
  <li>Between `req` and `res` the Loading component should exist on DOM</li>
</ol>
</div>

### AppContextProvider

In the `AuthContextProvider` component, you are tasked with updating the `providerState` object and passing it as a value to the `AuthContext.Provider`. The `providerState` object, provided in the boilerplate, requires the following key-value updates:

- `authState`: By default, the authentication state of the user should be `{ isAuth: false, userDetails: null }`.
- `loginUser`: This should be a function that will update the auth state by taking `userDetails` as an argument and update the authState in context API. ex:`{isAuth: true, userDetails: {email:email,token:token}}`.( Hint: The loginUser function is invoked with the `userDetails` only if the email and password entered in the input boxes are correct i.e, we will make a `POST` request to the `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login` and if we get the token as a response, then the user credentials are valid )
- `logoutUser`=> This should be a function that will update the auth state to the default state. `{ isAuth: false, userDetails: null }`.

- for example, the `providerState` will be assigned an object that will look like the below obj

```
{
  authState:{isAuth: false, userDetails: null},
  loginUser:()=>{},
  logoutUser:()=>{}
}
```

### JSON Data(`db.json`)

- db.json file is included in the boilerplate zip file, with the required data. **Do not overwrite/modify this data**
- Go through the db.json to know the data structure.
- This will contain all the products data that's need to be rednderd on Homepage.
- Use fetch for making network requests

**Functionalities component-wise**

## Routes

### AllRoutes

- will contain all the routes in this component
- `/` for `Home` page
- `/login` for `Login` page
- `/product/:id/view` for `ProductDetailsPage` page (`private route`)

### PrivateRoute

- Write the logic for protected Routes here.
- `/product/:id/view` for `ProductDetailsPage` page (`private route`).
- The above routes should not be accessed if the user is not logged in.
- If the user tried to access this page without login, The user should be redirected to the `Login` Page.

## App

- Add `Navbar` and `AllRoutes` components here.

## Pages

### Home-(`/`)

<div>
<img src="https://i.imgur.com/xmS9yrp.png" width="100%">
</div>

1. And all the products should be rendered under div with `data-testid="home-page-products"` provided in the boilerplate with the help of component `ProductCard`.
   - For getting the products data make a `GET` request to the endpoint `/products`. (By default all the products should be visible on PageLoad).
3. Between `req` and `res` to the json-server the `Loading` component should exist on DOM. (Either `Navbar+Loading` components or `Navbar+ProductCard's` should exist at a time)

### Login-(`/login`)

<div>
<img src="https://i.imgur.com/makZtrw.png" width="100%">
</div>

- The Login page features a form where users can input their `email` and `password`. user email as `bruce@wayne.com` and password as `gotham123` as valid credentials.
- There should also be a `Link` with text content as `Home Page` inside `div` with `data-cy="go-to-home-page"`. On clicking it the user should be redirected to `/`.
- Upon form submission, a `POST` request is sent to the `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login`.
  - The post request should have the `req.body` as 
      ```json
        { 
          "email":"bruce@wayne.com",
          "password":"gotham123"
        }
      ``` 
  - Sample Response :

    If successful (credentials are valid)

       
        {
            "token": "r0bINJoKeRGoTham911"
        }
    
    If not successful  

      
        {
                "message": "Invalid email or password"
        }
     
- Between `req` and `res` of the json-server, the `Loading` component should exist on DOM.
- After getting the token successfully, you can use the loginUser function from the context API and pass the email and token details of that particular user as an argument to the loginUser function, so that the authState can be updated accordingly.
  - Also the user is redirected to the `/` page.
  - The `Navbar` component should also be updated accordingly.

<div>
  <img src="https://i.imgur.com/X9h73AM.png" width="100%">
</div>

#### The following updates should happen in Context API

- If the user enters the correct credentials ( i.e., the email and password entered by the user is valid, i.e we get token after sucessfull POST request, the `authState` in context API should be updated as follows.

```json
  {
    isAuth:true,
    userDetails: {email:email,token:token}
  }
```

### ProductDetailsPage(`/product/:id/view`)

<div>
<img src="https://i.imgur.com/eOEtUqZ.png" width="100%">
</div>

- On this page, get the id of the products from the params.
- Based on the `id` fetch the details of the product by making `GET` to the endpoint `/product/id`.
- After getting the details update the details of the product by using the following HTML elements.
  - HTML elements are also mentioned in the boilerplate. You just need to add the textContent and other required elements.
    - h2 tag with textContent as `title`
    - p tags with textContent as `category`, `price`, `location`, `seller name`, `seller email`, and `createAT`.
    - there is a div with `className="images"` provided in the boilerplate.
      - render all the images to this `div` by using `img` tag.
    - static textContent is provided remaining textContent you just need to add. (check the boilerplate once to understand better)

- Between `req` and `res` of the json-server the `Loading` component should exist on DOM.


## Components

### ProductCard

<div style="text-align:center">
<img src="https://i.imgur.com/6lRBlNI.png" width="30%">
</div>

- This component will receive the details of the product as a prop from the parent component and display the details of the product. (Here we will display limited details of the product only as below)
- This component will contain a `div` with `data-testid="product-card"`(provided in the boilerplate).
- To the above component render all the details as below.
  - `img` tag: (Add only 1st image as the source link here.)
  - `p` tag: price details with textContent as `Price: {price}` where the price is the price of the product.
  - `h3` tag: title of the product.
  - `p` tag: location mentioned in the db.json.
- whenever the user clicks on the `div` with `data-testid="product-card"` the user should be redirected to `/product/:id/view` (`ProductDetailsPage` page). Here `id` should be the `id` of the product.

**_Note_**: Maintain the order of HTML elements as mentioned above.

### Navbar

<div>
    <img src="https://i.imgur.com/ChCvXrW.png" width="100%">
</div>

- This component should be seen on the top of all pages.
- This component will contain the following HTML elements. (only use `Link` and `button` tags as mentioned in the statement, don't add any extra anchor tags or don't use `Link` tags in place of `button` tags and vice-versa)
- Hint:- Use useNavigate for navigating the user on button press where ever required.
 - `div` with textContent `React-OLX` with `className="name"` and onClicking this `div` we should be navigated to the home page (`/`).(provided in the boiler plate just add functionality and as onClicking the div, the user should be naviagated, use useNavigate to achieve this functionality)
  - There is a div with `data-testid="login-logout"` provided in the boilerplate.

      - This `div` should contain the following HTML elements

        - Now we should be having HTML elements based on the two scenarios below.

          - If the user is not logged in, The following elements should exist.
              1. Link to login with textContent `Login` and navigating to `/login`
                 <br> (or)
          - If the user is logged in, The following two elements should exist.
              1. `span` tag with textContent `Welcome, {email}!` where email is the email of the user who logged in.
              2. `button` with textContent `Logout` with `className="logout"` and clicking on it we should be logged out of the application. i.e. the `isAuth` and `userDetails` in context API should reset to `initial states`.(If we are on the protected route page and we click on the `logout` button, then we should be redirected to `/login`.)

              ```json
              { "isAuth": false, "userDetails": null }
              ```
<div>
    <img src="https://i.imgur.com/PwBFZ6g.png" width="100%"/>
</div>


### Loading

- This component should be visible between `req` and `res`, whenever your application is interacting with the json-server
- Hint between `req` and `res`, the `Loading` component should exist on DOM.

**Note :-**

The problem is tested on CP.

<div>
<img src="https://i.imgur.com/1igFDfP.png" alt="cp-testlog" width="100%">
</div>

### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
