### Use of Chakra UI is compulsory in this Assignment

## Simple App with Chakra UI 

#### Problem Statement

Create the following application with the boilerplate code provided.

## Submission Instructions [Please note]

## Maximum Marks - 14

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Should have basic structure of navbar  - 3 mark
 ✅ Should have drawer visible when button clicked - 3 mark
 ✅ Should have modal visible when Login option clicked - 3 mark
 ✅ Should show toast for successful login- 2 marks
 ✅ Should show toast for unsuccessful login - 2 marks

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`

1. Libraries need to be installed by yourself

### Not following the above instructions will lead your test cases to fail

### Problem

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Features to build

1. Create a navbar with a logo (Chakra UI) and hamburger menu to open the chakra ui drawer.

2. On Clicking Hamburger icon open Drawer should open.

<img src="https://user-images.githubusercontent.com/103956933/229687945-fb37de74-3931-4872-a461-1432fc5bfe2a.png" width="100%">

3. Create buttons for Home, Gallery, Login, SignUp, and About Us.

<img src="https://user-images.githubusercontent.com/103956933/229687950-a686e9d8-a5d7-4615-bbb1-f32dc3780abf.png" width="100%">

4. On Clicking the `Login` button opens the chakra ui modal.

<img src="https://user-images.githubusercontent.com/103956933/229687952-5ffbc3c0-5c0b-48b9-9f05-4e9cc4b344a7.png" width="100%">

5. Modal should have an email and password input with type `email` and `password`
6. On submitting the form make a post request to `reqres.in` to verify the user
7. If login is successful show chakra `toast` with the title `Login Successful.`

<img src="https://user-images.githubusercontent.com/103956933/229687954-a3bdf869-c185-4405-9c3b-574e96380ead.png" width="100%">

8. If login is unsuccessful show chakra `toast` with the title `Login Failed.`

<img src="https://user-images.githubusercontent.com/103956933/229687957-823f5452-7f16-487f-95d9-3bff82358910.png" width="100%">

## Understanding Component Structure

- Components
  - ChakraDrawer.jsx
  - ChakraModal.jsx
  - Navbar.jsx
- App

### Navbar.jsx

- Use the Chakra `Flex` (data-cy="navbar") component to create the navbar and it should have justify-content = 'space-between'
- Inside Flex create logo `Chakra UI` with `Text` component (data-cy="logo")
- Create one Hamburger Icon button to open the Chakra drawer ( data-cy="drawer-open-btn")

### ChakraDrawer.jsx

- On clicking Hamburger Icon open the drawer
- Drawer should have a buttons with text Home, Gallery, Login, SignUp, About Us (case sensitive) and following id's

```
Home button - data-cy = "home"
Gallery button - data-cy = "gallery"
Login button - data-cy = "login"
SignUp button - data-cy = "signup"
About Us button - data-cy = "about"
```

- On clicking Login open the modal for login

### ChakraModal.jsx

- it Should have a `form` for email and password
- On Submitting the form authenticate the user with reqres.in
- If use logged in successfully show Chakra toast

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use the `<componentName>.module.css` convention for CSS in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this is used by testing tools to test your code, and removal of this will lead to a low score.
3. Make sure you use only the given components and don't create new files and folders as changing component name, structures might result in giving you zero marks
4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
