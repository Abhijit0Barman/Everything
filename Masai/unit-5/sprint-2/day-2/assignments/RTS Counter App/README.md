# React Counter APP

## Submission Instructions [Please note]

## Maximum Marks - 9

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Increment button works fine-1 - 1 mark
 ✅ Increment button works fine-2 - 1 mark
 ✅ Decrement button works fine-1 - 1 marks.
 ✅ Decrement button works fine-2 - 1 marks.
 ✅ Increment5 button works fine-1 - 1 marks.
 ✅ Increment5 button works fine-2 - 1 marks.
 ✅ Decrement5 button works fine-1 - 1 marks.
 ✅ Decrement5 button works fine-2 - 1 marks.

```

## Installation

- Use node version 16.16.0
- Please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.

- Run `npm install` to install all the dependencies.

## Description:-

You have to build a Counter app with React+TS.

All your code goes inside the `App.tsx` file.

There you will have 4 buttons along with some attributes(provided in the boilerplate) with the following text content:-

    1.  Increment
    2.  Decrement
    3.  Increment5
    4.  Decrement5

There will also be a h1 tag along with some attributes(provided in the boilerplate):-
  - By default, the text inside the h1 should be 0. And should be changed based on the following actions.

When clicked the `Increment` button the counter should increase by 1.

When clicked the `Decrement` button the counter should decrease by 1.

When clicked the `Increment5` button the counter should increase by 5.

When clicked the `Decrement5` button the counter should decrease by 5.

Whenever the counter value changes change store the data in localStorage with key:- `counter`.

**Note**:- When the App renders, it should check if there's an existing value stored in the browser's localStorage with the key `counter`. If such a value exists, it retrieves and uses that value as the initial counter value. Otherwise, it initializes the counter to 0 and stores this initial value in localStorage under the `counter` key.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.

2. Do Not Remove ` data-testid="xxxx"` from anywhere, this is used by testing tools to test your code, and removal of this will lead to a low score.

3. Make sure you use only the given components and don't create new files and folders as changing the component name, or structures might result in giving you zero marks.

4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components. But make sure there is no error in your application(including TS Errors).

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
