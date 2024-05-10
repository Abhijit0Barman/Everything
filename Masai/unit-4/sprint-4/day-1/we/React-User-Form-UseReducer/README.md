# react-user-form-useReducer

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the reducer function handles the default case - 2 marks
 ✅ Check if the name input tag is present, with the 'name' attribute, and the user can type on it  - 1 mark
 ✅ Check if the Gender is being selected from the Male and Female options, with the reducer function - 1 mark
 ✅ Check if the Role is being selected from FrontEnd Developer, BackEnd Developer, FullStack Developer option, with the reducer function - 1 mark
 ✅ Check if maritalStatus is being handled in the reducer function - 1 mark
 ✅ should render no users found text initially when there is no users data  - 1 mark
 ✅ should display details in a table - 2 marks
 ✅ should reset the fields with intitial data once the details are submitted - 2 marks
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
- You need to complete the application which takes the name, gender, role, maritalStatus from the user.
- The user should be able to enter the details in the respective input tags, with the correct type
- Name data should be taken by "input" tag should, with a type 'text'
- Gender data should be taken using a "select" tag, with options `Male`, `Female`, and `Prefer Not to Say`.
- Role data should be taken using a "select" tag, with options `FrontEnd Developer`, `BackEnd Developer`, and `FullStack Developer`.
- Marital Status data should be taken using a single `checkbox` with a "Married" label if checked print as `married` else `unmarried`
- When there is no data print `no users found` in the h2 tag with data-testid = `no-user-container`
  ![](https://i.imgur.com/ZSyk1ew.png)
- Once the details are filled and submitted (stored in the submittedData variable inside App.js), the form should display the entered details in tabular format.

  - The table should have `data-testid="user-container"`

  ```HTML
  <table data-testid="user-container">
            <thead>
              <tr>
                <th>S.no</th>
                <th>User</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Marital Status</th>
              </tr>
            </thead>
            <tbody>
              append the data here with the help of the `tr` and `UserRow` components.
            </tbody>
  </table>
  ```

  Note:- Either `h2` with `data-testid="no-user-container"` or `table` should exist on the DOM at a time.

  ![](https://i.imgur.com/ipfmETk.png)

- should have the action types as "name", "gender", "role", "maritalStatus" for updating "name", "gender", "role", "maritalStatus", and the actions should be dispatched while you are typing in respective input tags.
- the default case should throw an Error with the message `invalid action type`.
- To reset the reducer state in the initial state, create an additional case in the reducer function,
  - Use "reset" as one of the types in the reducer function to achieve the form reset functionality

## Boilerplate

- You are given these Components:
  - App
    - User should store all the form data in a **single object** (the initial state of the useReducer hook)
    - You should use the `useReducer` hook to store all the form data, in a single place.
    - user should be able to update the user details, in the input boxes, select boxes or checkboxes present inside the form.
  - UserRow
    - should accept the following as props
      - name
      - gender
      - role
      - maritalStatus

### Note: The submissions are invalid if `useReducer` hook is not used.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
