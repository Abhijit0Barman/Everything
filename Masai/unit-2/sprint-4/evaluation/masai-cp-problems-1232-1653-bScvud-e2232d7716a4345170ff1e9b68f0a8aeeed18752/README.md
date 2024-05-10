# WEB - Masai Fetch Stock App

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the api call made - 2 marks.
 ✅ Student is able to loop through the data and append in the dom - 2 marks.
 ✅ Check if the Filter Part is working or not - 1 marks.
 ✅ Check add to portfolio feature  - 1 marks.
 ✅ Visit Protfolio page and check DOM - 1 marks.
 ✅ Check the quantity part - 2 marks.
 ✅ Check the deleting part - 1 marks.
 ✅ Adding duplicate stock shouldn't work - 1 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html(Home Page)
- portfolio.html(Portfolio Page)
- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- In this application, we have 2 different pages:-
  1. index.html(Home Page)
  2. portfolio.html(Portfolio Page)

#### index.html(Home Page):-

- On loading this page make an API request with fetch in this API end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-stocks?limit=30`

- On Successful API request, you will get a response of stock data which is in form of Array of Objects.

- Loop over the response data, for each stock create a table row and append them in the tbody of table given in the template.

- Please make sure you only use tr,td to create the table.

- Refer to this image for better understanding:-
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-24/Screenshot%202023-03-24%20at%2010.35.06%20AM_968321.png)

- Here in the table rows all the cell data will come from api except for the last cell where the text will be `ADD` . This word in case-sensitive so make sure you take care of that.

- You should also implement Filter functionality.
  There is a div with an id:- `filter`. Inside that div there are 2 input tags and a button.

- When the user clicks on the button filter the table and only show those products that are withing that price range.

- Example:-
  `let's say that the first input has value 100 and the second input has a value of 200 then only show the items that has price between 100-200 both values included.`

- Reffer to this image for a better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-24/Screenshot%202023-03-24%20at%2010.35.32%20AM_173471.png)

- When the user clicks on the cell with text `ADD` add that stock's data in the localStorage with key:- `portfolio`

- Make sure that the user shouldn't be able to add same stock multiple times in the localStorage.

#### portfolio.html(Portfolio Page):-

- In this page get the data from the localStorage with key `portfolio`

- Loop over the response data, for each stock create a table row and append them in the tbody of table given in the template.

- Please reffer to this image for a better understanding:-
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-24/Screenshot%202023-03-24%20at%203.33.42%20PM_539284.png)

- The last 4 Table headings are

  1. INCREMENT
  2. QUANTITY
  3. DECREMENT
  4. DELETE

- The `INCREMENT` cell should have text `+`, the `DECREMENT` cell will have text `-`.

- In the `QUANTITY` cell the text by default should be `1` if the user clicks on `+` that row's quantity should increase and if the user clicks on `-` that row's quantity should decrease.

- Even on page reload the quantity should persist. Use localStorage.

- The text in the last cell should be `Delete`. This word in case-sensitive so make sure you take care of that.

- On clicked on this cell that stock data should be deleted both from DOM and from localStorage.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
