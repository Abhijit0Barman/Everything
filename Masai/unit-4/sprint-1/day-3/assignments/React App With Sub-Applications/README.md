## React app with sub-applications

### Submission Instructions [Please note]

#### Maximum Marks - 22

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ Button component used for creating buttons and should be styled as mentioned in the problem statement - 2 marks
✅ Container component is used for wrapping the required components and should be styled as mentioned in the problem statement - 2 marks
✅ Counter by default having 3 buttons and displaying correct initial value - 1 mark
✅ Counter INC buttons are working and also values are updated on DOM and the buttons are disabled accordingly- 1 mark
✅ Counter decrement and reset buttons are working - 2 marks
✅ Todo sub application has a basic structure and all the elements of this are wrapped inside the Container - 2 marks
✅ Able to add TODO and get updates on DOM in real time and toggle the status - 2 marks
✅ Should be able to add multiple todos and able to delete the todo - 2 marks
✅ Users list application should have the basic structure - 1 mark
✅ Users component is showing all the data as per the problem statement - 1 mark
✅ Follow button on clicking showing alert with the correct message- 2 marks
✅ Able to sort the userslist in ascending order - 1 mark
✅ Able to sort the userslist in descending order - 1 mark
✅ Able to reset the data in default order - 1 mark
```

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
  try to keep one submission at a time

## Problem

### Description

- You need to create a react application which should have 3 different sub-applications.
  - Counter
  - TodoList
   - Users List

## Folder Structure

```
  src
    |-- App.jsx
    |---Components
        +---common
        |   +---button
        |   |       Button.jsx
        |   |       Button.module.css
        |   |
        |   \---container
        |           Container.jsx
        |           Container.module.css
        |
        +---counter
        |       Counter.jsx
        |
        +---todolist
        |       AddTodo.jsx
        |       AddTodo.module.css
        |       TodoItem.jsx
        |       TodoItem.module.css
        |       TodoList.jsx
        |
        \---users
                UserCard.jsx
                Users.jsx
```

### App

<div>
<img src="https://i.imgur.com/y7VFph4.png" width="100%">
</div>

- In this component, you need to import the following components.
  - Counter
  - TodoList
  - Users

# common

- The components inside the common folder, we will be re-using them in our application.

## Button component

- This `Button` component consists of a `button`.(Already provided in the boilerplate)
- We need to `re-use` this `Button` component everywhere in this application where we need a button.
- The button should be styled using `module.css`. The className that you need to use for styling should be having className as a `button`.

## Container component

- This `Container` component consists of a `div` tag. (Already provided in the boilerplate)
- The above `div` tag should be styled using `module.css`. The className that you need to use for styling should be having className as `container`.

# Counter Application
<div>
<img src="https://i.imgur.com/OUUKvsa.png" width="100%">
</div>

- The user should be able to increment, decrement, and reset the count using the provided buttons and display the value.

## Counter component

- The value should be displayed in an h1 tag with the text content `Count : {count}` where {count} will be the value of the count. By default, it is `0`.
- There should be 3 buttons:
  1. The `INC` button:
     - Should have text content `INC`.
     - Should increment the value by 1 every time it is clicked.
     - On reaching the count `10`, the button should get disabled. (Hint: The count value should never be displayed as `11`).
  2. The `DEC` button:
     - Should have text content `DEC`.
     - Should decrement the value by 1 every time it is clicked.
     - When the value is 0, the button should be disabled. (Hint: The count value should never be displayed as a negative number).
  3. The `RESET` button:
     - Should have text content `RESET`.
     - Should reset the value to 0 when clicked.
     - When the value is 0, the button should be disabled.
- Hint: When the value is 0, the `DEC` button should be disabled.

- <div style="color:red">You should only use the <span style="color:green">Button</span> component to create the above buttons. Do not create new `button` tags manually for further components also.</div>
- Hint:- pass the required props to `Button` component and you can re-use the `Button`
- <div style="color:red">The entire <span>`Counter`<span> component should be wrapped inside <span style="color:green">`Container`</span> component.</div>
- Hint:- you can wrap inside the `Container` component in such a way it will act as a parent element for all the elements inside `Counter`.

# Todo List Application
<div>
<img src="https://i.imgur.com/U2Qtfg3.png" width="100%">
<img src="https://i.imgur.com/n9j0RLz.png" width="100%">
</div>

- This allows the users to `ADD`, `DELETE`, and toggle todo status as `Completed` or `Not Completed`.

#### TodoList component

- This component should contain an `h1` tag with text content `Todo List`, an `AddTodo` component, and a `ul` tag which should wrap all the `TodoItem` components.
- All the elements inside this component(`TodoList`) should be wrapped inside the `Container` component.

#### AddTodo component

- This component will contain an `input` tag and a `button` tag with text content `ADD`.
  - The `input` tag should contain a placeholder as `Add a new todo`.
  - The `input` tag should be styled using module.css and className for writing in module.css should be `input`
- For creating the `button` you need to re-use the `Button` component.
- When the user enters any todo title in the `input` tag and clicks on `ADD` it should get added on the DOM with the help of the `TodoItem` component.

#### TodoItem component

- This component will be having a `div` with `data-testid="todo-item"` and this should be styled using module.css and you need to className as `wrapper` when writing in module.css.
  - Inside the above `div` tag the following elements should be there.
  - `P` tag which should show the todo `title` and `status of the todo`
    - The text content should be `title1 - Not Completed` or `title1 - Completed` (By default the status is `Not Completed`)
  - There should be `two` buttons which you need to create using the `Button` component
    - The `TOGGLE` button should toggle the status of the todo to `Completed` or `Not Completed`.
      - the text content should be `TOGGLE`
    - The `DELETE` button on clicking on which the todo should get deleted from the DOM. (`TodoItem` component of that particular todo should be removed from the DOM).

Hint:- Single Todo Schema. (Not mandatory to save the data in this format, just gave it as a hint) 
```
{ 
id: number,
title: string,
status: boolean 
}
```



# Users List application.
<div style="text-align:center">
<img src="https://i.imgur.com/20L5UfP.png" width="50%">
</div>

- In this application user should be able to see a list of the `users` and should be able to sort the data based on the number of followers and reset the sorted data.

#### Users component

- There should be `h1` tag with a heading and `h3` tag with another heading provided in the boilerplate.
- There should be `3` buttons for sorting the data based on the number of followers and these buttons should be created with the help of the `Button` component.
  - The `Sort by asc` button with text content `Sort by asc` for sorting the data on DOM in ascending order of the number of followers.
  - The `Sort by desc` button with text content `Sort by desc` for sorting the data on DOM in descending order of number of followers.
  - The `Reset` button with the text content `Reset` for displaying the data in the default order.
- The users list is provided in the boilerplate, you need to display each user with the help of `UserCard` component.
- All the elements inside this component should be wrapped inside the `Container` component.


#### UserCard component
<div style="text-align:center">
<img src="https://i.imgur.com/BZyHW2S.png" width="50%">
</div>


- This component should receive user data as props and display the details of the users with the help of the following HTML elements.
  - avatar (in `img` tag)
  - user's name(in `h2` tag with `data-testid="user_name"` as attribute)
  - address(in `p` tag with `data-testid="user_address"` as attribute)
  - There should be an `h3` with `Posts` as text content
  - no of `posts` (in `p` tag with `data-testid="user_posts"` as an attribute)
  - There should be an `h3` with `Followers` as text content
  - no of `followers`(in `p` tag with `data-testid="user_followers"` as attribute)
  - There should be an `h3` tag with the text content `Married`
  - if the person is married there should be text content as `Yes` or else `No` in `p` tag with the attribute as `data-testid="is-married"`.
  - there should be a `button` with text content as `Follow` on clicking on it we should get an alert `You are now following ${name}` where `name` is the name of the `user` you are following.
    - you should re-use the `Button` component don't create `button` tags manually.

<div>
<img src="https://i.imgur.com/fZKVEdT.png" width="100%">
</div>


#### Note

<ol style="color:red">
<li>In modules.css we provided the styling, you can just import and do the remaining part</li>
<li>Dont change the order of the HTML element, for reference go through the snapshot</li>
<li >Use the respective **module.css files to write the CSS. If you use the inline style then your code will not be accepted for some test cases even though you can achieve the same layout</li>
<li>Use classNames as mentioned in the problem statement while writing in module.css</li>
<li> Don't use inline styles or create additional files for CSS. Doing this may lead to zero marks</li>
</ol>

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to low scores.
- Also make sure to cross-check all the spellings and Cases of Texts.

**The problem is tested on CP**

<div>
<img src="https://i.imgur.com/FxgMziR.png" width="100%">
</div>

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
