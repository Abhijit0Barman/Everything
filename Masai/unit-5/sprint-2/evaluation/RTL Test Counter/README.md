### RTL Test Counter

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

## Maximum Marks - 6

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Counter app should be present in the DOM with data-testid="counter-app"  - 1 mark
 ✅ Add and reduce button should be present - 1 mark
 ✅ Button component should be rendered properly - 1 mark
 ✅ On clicking Add button the counter value should increase - 1 mark
 ✅ On clicking Reduce button the counter value should decrease - 1 mark
```

## Folder Structure (Important Files)

```
>Src
├── >__tests__
|   └── Counter.test.js
├── >Components
│    └── Button.jsx
│    └── Counter.jsx
└── App.js
```

## Problem Statement

There is a counter app already created. There might be something missing like test-ids, tags or some mistakes in the code.
Your task is to debug the code and pass all the tests.

**Basically you have to create an application based on test cases**

#### How to do this?

- Run the test command
- Refer the errors in the console
- Refer the test file and the test cases written there
- Do the required changes in the code and submit

## Note:-

DO NOT try to change anything in the test file, or it will result to ZERO mark.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
