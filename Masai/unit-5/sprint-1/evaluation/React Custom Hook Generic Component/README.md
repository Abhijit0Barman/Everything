# React Custom Hook Generic Component

#### Testing Objectives for Students

1. The user should be able to create his own custom hooks, that cover most of the edge cases, related to its functionality.
2. The user should be able to use "PropTypes" for type-checking the props that the component receives.
3. The user should be able to create his own custom React components. The components should function properly when the user passes the required props.

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the default return values and format of useDarkMode hook are inside an array  - 1 mark
 ✅ Check if the button has 'Dark' text and NO "dark-mode" classname present on app-component by default - 2 mark
 ✅ Check if the button text was changing from Dark to Light and vice-versa on changing the theme - 1 mark
 ✅ Check if the theme was persisting even with page refresh - 1 mark
 ✅ should render the UserCard component in the UI  - 1 mark
 ✅ should have the proptypes defined for UserCard with "name" prop as `isRequired` - 1 mark
 ✅ should use the default value of description, backgroundColor as className, imageURL and title from props - 4 marks
 ✅ should render the UserCard with the default className of 'round' as a value of avatarShape for userimage - 2 mark
 ✅ should render the Input component with the proptypes defined, with variant props as `isRequired` - 2 mark
 ✅ should render the Input component in the UI - 1 mark
 ✅ should use values of size, and variant props as classNames - 2 mark
 ✅ should show the typed value of the input box, inside the app.js input-value div - 1 mark
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

## Boilerplate

- You are given these Components:
  - App
    - UserCard
    - Input

## Description

#### useDarkMode hook

- import the useDarkMode hook, to be used in the App.js file
- Syntax:

```JavaScript
 const [isDarkMode, toggleDarkMode] = useDarkMode();
```

- The variable isDarkMode should return false, by default
- The variable toggleDarkMode will be a function that toggles the value of isDarkMode.
- Change the UI, by using the 'dark-mode' className on app-component, by validating it with isDarkMode variable.
- Change the text on the button to Dark and Light, depending on the value of isDarkMode variable.
- For example: if isDarkMode = false, button text = 'Dark', else 'Light'
- Try persisting the theme of the application, even with page reload.
- **[HINT]**: use Local Storage

#### UserCard

- It should take the props, `imageURL`, `avatarShape`, `name`, `description`, `backgroundColor` and `title`
- Define the correct propTypes for this props, with the name prop as `isRequired`.
- avatarShape
  - values that it can take: `round` and `square`
  - default value `round`
  - use the values as classNames for making the changes.
- description
  - default value `Testing Description`
- backgroundColor
  - default value `red`
  - use the values as classnames for making the changes.

#### Input

- It should take the following props, `type`, `size`, `variant`, `value` and `onChange`.
- Define the correct propTypes for this props, with the variant prop as `isRequired`
- `type` is type of inputbox. default type is text
- size will have following values: sm, md, lg, xl. Use it as classnames. You can decide what these values for sizes going to be. Default value `md`
- variant has following values: outline, filled, and flushed. Use these values as classnames. Reference: [docs](https://chakra-ui.com/docs/components/form/input#changing-the-appearance-of-the-input)
- `value` prop will take the default value of the input tag, if any.
- `onChange` is also a callback that directly gives you value. it doesn't give entire event object, only the value we are typing. For example: [Link](https://chakra-ui.com/docs/components/input/usage#controlled-input)
- Show the user input text in the App.js file, inside the `input-value` div.
- Theme button will have `data-testid="theme-button"`

## Some Screenshots of the application:

![Imgur](https://i.imgur.com/CuQqQRV.png)
![Imgur](https://i.imgur.com/wUKgDOx.png)fd
![Imgur](https://i.imgur.com/k6dNyLg.png)
![Imgur](https://i.imgur.com/widcbaA.png)
![Imgur](https://i.imgur.com/0nvWfCR.png)
![Imgur](https://i.imgur.com/Uoyl4Gs.png)

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- DO NOT use CHAKRA UI.
- DO NOT use inline style.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
