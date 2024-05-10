# React PSC

## Submission Instructions [Please note]

## Maximum Marks - 8

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ The list component should not be shown by default - 1 mark
 ✅ Should have a button to toggle the visibility of the list component - 2 marks
 ✅ Should show the 3 li tags in the list component, by default - 2 marks
 ✅ Should render an image tag in the UI with the given src and all attributes - 2 marks

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

# Problem

### Understanding Component Structure

- Components
  - Lists.jsx
- App.js

## Description

- Complete the code for the image tag and the onClick handler for the `Show List` button in App.js file
- use image `https://images.unsplash.com/photo-1615826932727-ed9f182ac67e?ixlib=rb 4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80`
- image alt text should be `todo-cover`
- Render the Lists component, ONLY when the user clicks on the toggle button
- Render the todo data inside the lists component, inside li tags, which you are receiving via the props.

## Screenshots

![Imgur](https://i.imgur.com/nbYhNWw.png)
![Imgur](https://i.imgur.com/HAiMYmI.png)

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `src`, `alt`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time

### Testing Objectives

1. Conditional Rendering
2. Rendering List
3. Rendering Image
4. Simple State Management
