## React-Multi-Step-Form

## Maximum Marks - 15

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Should have a heading visible - 1 mark
 ✅ First step should have current step, next button, input fields visible  - 2 marks
 ✅ Second step should have current step, next & previous button, input fields visible - 2 marks
 ✅ Third step should have current step, next & previous button, input fields visible - 2 marks
 ✅ Last step should have current step, previous & submit button, input fields visible - 2 marks
 ✅ Last step should have input type = submit button - 1 mark
 ✅ Should have show correct output for all values entered in inputs - 4 marks
```

#### Testing Objectives in the Evaluation.

Able to create a multi-step user SignUp form

#### Problem Statement

Create a multi-step user signup form.

#### Getting Started

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run the following commands
  - `npm install --engine-strict`
  - `npm start`

#### Folder structure

- src
  - pages
    - SignUp.jsx
    - SignUp.css
  - Components
    - SignUp
      - StepOne.jsx
      - StepTwo.jsx
      - StepThree.jsx
      - StepFour.jsx
      - UserInfo.jsx
- App.js

## Note:

- for buttons add `type="button"`
- for next button add `data-cy="next"`
- for the previous button add `data-cy="previous"`

### App.js

- should have the heading `React Multi Step Form` inside the h1 tag

### SignUp.jsx

- import all components from the Components folder
- Show the current step inside the `h2 tag` and add `data-cy=current-step`(Show inside form)
- create a multi-step form with `form`
- inside `form` show component according to the current step
- if the form is submitted then show the `UserInfo` component otherwise show the `SignUp form`
- you can use a boolean value to toggle between form and output
- if the form is submitted then pass form data to the `UserInfo.jsx` component

### StepOne.jsx

- create following inputs for step one

```
email    - data-cy="email", type="email,
password - data-cy="password", type="password",
confirm password - data-cy="confirmedPassword", type="password"

```

- one `button` for the next step
- only one button `next` should be in step one

<img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/103956933/223979109-fbcddb14-5ac6-4373-b2a2-18cb4bbdbb23.png">

### StepTwo.jsx

- create following inputs for step two

```
education    - data-cy="education" , select tag (option - B.Tech, Bsc, B.A, BCA)
passing year - data-cy="passing year",  input - (type = month)
birth date   - data-cy="birthDate", input - (type = date)

```

- two buttons `next` and `previous`

<img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/103956933/223979119-9f1547b4-78e9-47bf-b585-c91dbde27dcc.png">

### StepThree.jsx

- create following inputs for step three

```
first name   - data-cy="firstName", type="text",
last name    - data-cy="lastName", type="text",
phone number - data-cy="phone", type="tel"

```

- two buttons `next` and `previous

<img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/103956933/223979085-eb3289ca-9451-445b-95ec-b7633b360cfa.png">

### StepFour.jsx

- create input for `father name - data-cy="fatherName", type="text"`, `mother name - data-cy="motherName", type="text"`
- for address use `textarea` with `data-cy="address"` and `type="text"`
- one button for `previous`
- one button for submitting the form with `input - (type="submit")`
- use `onSubmit` on the form for submitting

<img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/103956933/223979091-2b906f8c-c9d7-4a78-83f7-04682ae6619e.png">

### UserInfo.jsx

- show output inside div with `className="user_info"`
- show a success message `You are registered successfully!` inside `h2`
- Show form values inside the `p` tag

<img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/103956933/223979094-c7a070e9-a5bb-4885-accc-daec603e9a5b.png">

## Important Instructions:

- Do not remove the `data-cy` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- Do not change the current folder structure, and names of components/files provided.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
