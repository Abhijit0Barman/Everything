# React TS TODO APP

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check localStorage with one submission - 1 mark
 ✅ Check localStorage with multiple submission - 2 mark
 ✅ Check if Todos are being rendered or not - 1 marks.
 ✅ Check if By Default all Todo check boxes are not checked - 1 marks.
 ✅ Check after status changing in LS and in DOM-1 - 2 marks.
 ✅ Check after status changing in LS and in DOM-2 - 2 marks.

```

## Installation

- Use node version 16.16.0
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.

- Run `npm install` to install all the dependencies.

## Description:-

- You have to build a Todo app with React+TS.
- In the template you will find a Components Folder. There you will have the following files:-

  1. Code.tsx //This component will contain Add.tsx and Todos.tsx components
  2. Add.tsx  
  3. Todos.tsx // display all the todos on the DOM with the help of Todo component
  4. Todo.tsx // render todo on DOM.(required elements are provided in the boiler plates)

- Inside `Add.tsx` you will have a form. onSubmit of that form you have to create a new todo.

- Inside the form you will have an input tag (title) and a textarea(description).

- Each todo should have the following 3 properties:-

  1.  title
  2.  description
  3.  status

- The first 2 properties will come from the form but the status will be false by default.

- Inside the `Todos.tsx` file you will loop over the todo data and for each todo you will show the `Todo` component which is inside `Todo.tsx` file.

- Inside the Todo Component you have:-

  1.  a h2 tag with `data-testid="todo-title"` where goes the title of the todo.
  2.  a p tag with `data-testid="todo-desc"` where goes the description of the todo.
  3.  a input:checkbox with `data-testid="todo-status"` which should show the status of that todo.

- Reffer to this image for better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-10/Screenshot%202023-03-10%20at%203.53.26%20PM_801845.png)

- By changing the checkbox to checked on unchecked you can chnage status of that todo.

- Also please make sure when submitting the Form or when changing the todo status you store the data in localStorage with key:- `todos`

- **Note**:- When the App renders, it should check if there's an existing todos stored in the browser's localStorage with the key `todos`. If such a value exists, it retrieves and uses that value as the initial todos value. Otherwise, it initializes the todos to [] and stores this initial value in localStorage under the `todos` key.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.

2. Do Not Remove ` data-testid="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.

3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks.

4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components. But make sure there is no error in your application(including TS Errors).

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
