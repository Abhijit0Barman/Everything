# useReducer Problem 1

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-211 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
Using useReducer hook is MANDATORY
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ check if the reducer function handles the default case - 2 marks
 ✅ check if the reducer function handles the email action type - 2 marks
 ✅ check if the reducer function handles the password action type - 2 marks
 ✅ should render "no details found" text initially when there is no submitted data  - 1 mark
 ✅ should display the submitted data in the UI - 1 mark
 ✅ should reset the input fields with initial data once the details are submitted - 1 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
npm install --engine-strict

// run locally
npm run start

// test locally
npm run test

```

## Description

- You are expected to use useReducer hook to handle the form data
- You need to complete the application(form) which takes the email and password from the user.
- The user should be able to enter the details in the respective input tags, with the correct type
- Email data should be taken by the "input" tag with the type 'email'
- Password data should be taken by the "input" tag, with a type 'password'
- When there is no data submitted in the form, the below div should exist on DOM.(Initially, there is no data submitted so below div should exist on page load)

```html
<div data-testid="no-details-container">No details found</div>
```

- ![](https://i.imgur.com/C9r4lb6.png)
- ![](https://i.imgur.com/9IRZDA8.png)
- Once the details are filled and submitted, it should be displayed with the entered details in the UI
  ![](https://i.imgur.com/YMkVgl0.png)

Below is the markup for reference

```html
<div>
  <div data-testid="submitted-data-email">
    User Email: masai@gmail.com
  </div>
  <div data-testid="submitted-data-password">
    User Password: password
  </div>
</div>
```

- To update the email, and password we should have action types as `email`, and `password` respectively. (Hint:-the payload should be the values of the input tags.)
- To reset the reducer state to the initial state, create an additional case in the reducer function,
  - Use `reset` as one of the action types in the reducer function to achieve the form reset functionality
- The default case should throw an Error with the message `invalid action type`.


Note:- The action should be dispatched with the appropriate type and payload, every time the input tags value is gettting changed.

## Boilerplate

- You are given these Components:
  - App
    - User should store all the form data in a **single object** (the initial state of the useReducer hook)
    - You should use the `useReducer` hook to store all the form data, in a single place.
    - user should be able to update the user details, in the input boxes

### Note: The submissions are invalid if `useReducer` hook is not used.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
