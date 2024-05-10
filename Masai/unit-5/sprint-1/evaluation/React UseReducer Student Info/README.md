# react-usereducer-student-info

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Installation

- you can use any node version >= 14 and <=16
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - run `npm install --engine-strict` to install the node modules
  - `npm start`
  - `npm run test` -> to run the test

## Maximum Marks - 10

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Reducer initialstate should match the initial state as per problem  - 2 mark
 ✅ Form is present with proper input fields to take input of student-data - 1 mark
 ✅ Reducer should update on typing name in the input box - 1 mark
 ✅ Reducer should update on typing batch in the input box - 1 mark
 ✅ Reducer should update on typing course in the input box  - 1 mark
 ✅ Reducer should update on typing image in the input box - 1 mark
 ✅ Reducer should update on selecting rating from the options - 1 marks
 ✅ Reducer should update on checking the status checkbox - 1 mark
```

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── AddStudent.jsx
│    └── Navbar.jsx
└── App.js
```

## Problem Statement

Create a dashboard where you can add students information like name, image, batch, course, rating and active status. The reducer should update accordingly.

#### useReducer

- The initial state will be as

```
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
```

- The following action types will be triggered for corresponding values

```
"NAME"
"BATCH"
"COURSE"
"IMAGE"
"RATING"
"STATUS"
"RESET" - (For resetting the state)
```

#### AddStudent.jsx

- Create a form where the user will enter all the student details
- Provide input boxes for following :-

```
Name: -
Batch: -
Course: -
Image: -
```

- Provide the input tags below `label` tag within the wrapper `div` provided

- Provide a select tag for rating with the following options and corresponding values
- This select tag will have `data-testid="rating-select"`

```
`Option`-`Value`
- 1   -  "1"
- 2   -  "2"
- 3   -  "3"
- 4   -  "4"
- 5   -  "5"
```

- Provide a checkbox for current status, if the checked status will be `active`, and if not it will be `inactive`

- Provide a submit button for submitting the form.
- After submitting the form both the form and the reducer state should be reset.

<img width="1728" alt="Screenshot 2023-04-09 at 11 12 38 AM" src="https://user-images.githubusercontent.com/74458714/230784948-35539485-c797-4dc0-b4b6-8c20068b063f.png">

### Note : The submissions are invalid if `useReducer` hook is not used.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
