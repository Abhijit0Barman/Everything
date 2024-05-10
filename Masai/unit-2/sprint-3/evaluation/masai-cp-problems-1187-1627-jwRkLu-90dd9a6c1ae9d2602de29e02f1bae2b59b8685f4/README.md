# WEB - Masai Job App

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit is Working Fine - 1 mark.
 ✅ Check the Data after multiple forms submit - 1 mark.
 ✅ Check the jobList page's Table - 1 mark.
 ✅ Check the total Table size - 1 mark.
 ✅ Check Filtering is Done - 1 mark.
 ✅ Add To applied and Check the Deleting- 1 mark.
 ✅ Add To deleted and Check the Deleting- 1 mark.
 ✅ Visit applied Page and Check Table- 1 mark.
 ✅ Check The deleted Page- 1 mark.
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- ```Scripts```
- index.html
- jobList.html
- applied.html
- deleted.html

- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Before writing any code please read the problem statement very carefully.
- Here you have to build a job application.
- Your application had a Navbar that contains 4 tabs (this is already in the template no need to build).
  1. Home
  2. jobList
  3. applied
  4. deleted

#### Home Page:-

- This page contains a form with 6 input boxes and one select tag having the following fields (this is already in the template no need to build).
  1. Company Name
  2. Position
  3. Posted Date
  4. Salary
  5. Location
  6. email
  7. contract type (select)
- On clicking on form submit (form submit event) you should store jobs' data in your local storage with the key `job-list`

- Hint : localStorage.setItem("job-list",JSON.stringify)

#### Refer to this image for better understanding:-

![Web-job-app-home](https://user-images.githubusercontent.com/101581634/225058485-c458d851-1dc1-48ca-afa1-014704dd72f6.png)

- Refer to this doc to understand how to take input values from date - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

#### jobList Page:-

- On this page, all the data from the job list will be shown in a table format.
  - The table will have the following columns:-
     - Company Name
     - position
     - Added Date
     - Salary
     - job location
     - Email
     - contract Type
     - apply
     - delete
     - Here the values will come from the LacalStorage Except for the last 2 columns.
- In the apply column for each row you should put the value `apply`.
- In the delete column for each row you should put the value `delete`.
- ***These texts ```apply``` and ```delete``` are case-sensitive so please make sure there is no spelling mistake.***
- When you click on the apply button that particular row should be deleted and should be added in a new localStorage with the key `apply-list`
- Hint : localStorage.setItem("apply-list",JSON.stringify)
- Similarly when you click on the delete button that particular row should be deleted and should be added in a new localStorage with the key `delete-list`

#### Refer to this image for better understanding:-

![jobList](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-16/Screenshot%202023-03-16%20at%203.15.46%20PM_486003.png)

- On this page, we will also have a part that `counts` the no of current jobs added. It should be updated along with adding new jobs or deleting jobs.
- We will also have a `select tag`. Using this we can filter jobs by `contract`.

#### applied Page:-

- On this page, all the data from the apply list will be shown in a table format.
   - The table will have the following columns:-
     - Company Name
     - position
     - Added Date
     - Salary
     - job location
     - Email
     - contract Type
- Here the values will come from the Local storage.

#### Refer to this image for better understanding:-

![applied page](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-16/Screenshot%202023-03-16%20at%203.16.22%20PM_471479.png)

#### deleted Page:-

- On this page, all the data from the deleted list will be shown in a table format.
- The table columns are same as the applied Page.

#### General guidelines:-

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.
