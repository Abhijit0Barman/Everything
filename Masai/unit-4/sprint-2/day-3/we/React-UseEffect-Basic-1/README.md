## React useeffect 1

#### Problem Statement

## Submission Instructions [Please note]

## Maximum Marks - 15 marks

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Check if the initial network request is made and get only 12 units of data - 2 marks
 ✅ check if the default page is 1 and button is disabled and page 1 results are correct - 2 marks
 ✅ check if page buttons are working fine and fetching the correct page data and updating the DOM - 3 marks
 ✅ The border color of the active page should be red - 2 marks
 ✅ check pagination component is dynamic - 5 marks;

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json 
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.

```
// install npm packages
npm install --engine-strict

// start application locally
npm run start

```

1. Libraries need to be installed by yourself


### Not following the above instructions will lead your test cases to fail


## Description

- You need to make an application that lists employees list from an API.
- The user should be able to apply pagination.
![img](https://i.imgur.com/laJDq3i.png);

## Boilerplate
  - App.js
      - user should be able to see a list of all employees fetched from API
      - there should be 12 per page in tabular format
      - On loading, the page make an API request with default page 1 and limit 12
 end-point:- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees.
      - query params:
        - page: a number representing the page number.
        - limit: a number representing the total number of results per page.
      - Check the response from api to know the data format you are getting.
      - Loop over the response data and create rows and append them inside the tbody given in the template
      - Each row will have the following columns:-
		- Name
		- Department
		- Image
		- Gender
		- Salary
      - There should be buttons to change the pages. The number of pages should be as per the no of results you are getting.      
      - The pagination part should have the following functionaliy 
        - should have 1,2,3,...n number of buttons based on the data.
        - The current button will be disabled      
      - Populate page numbers equal to the number of total pages received from the api response. 
      - The border color of the active button should be red(the border should be given as "1px solid red")
      - by default page number 1 should be the active page
      - on click of any button the new page number will be sent to the onChange callback.    
    
**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
