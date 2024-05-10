# React - Countries List

## Submission Instrions [Please note]

### Maximum Marks - 10

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
✅ Able to submit and run the application - 1 mark
✅ CountriesRow works correctly - 1 mark
✅ Pagination component works correctly - 1 mark
✅ Should render Countries data correctly - 4 mark
✅ Should work with pagination correctly - 3 mark
```

## Description

- You need to make an application which lists Countries from an api
- User should be able to apply pagination

## Boilerplate

- You are given a set of Components
- Countries.jsx
- CountriesRow.jsx
- LoadingIndicator.jx
- Pagination
  - Pagination component which will have prev, next, current and total pages
- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```

npm install --engine-strict

// run locally
npm run start


```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
  try to keep one submission at a time

## Requirements

- API details
- `url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
- **query params**:
  - `page`: a number representing the page number
  - `limit`: a number representing total number of results per page
  - `orderBy`: order the products in ascending or descending manner, based on the price field
- **response**
  - `data`: array of products
  - `totalPages`: number representing no of pages
- example `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=2&limit=5&orderBy=desc`
- By default when the user loads the page, the user should be shown a set of products
  - of page 1
  - 10 per page
- You cannot use JSON server
- use useEffect to display the data on the UI

- `Countries`

  - It should contain a LoadingIndicator component by default ( use Conditional rendering )
    - don't show any other UI when API is loading
  - You need to make an api call and fetch countries data
    - you should fetch ten(10) per page
    - it should be page 1 by default
  - After we fetch countries data, hide the loading indicator
  - Display the list of CountriesRow, and pass appropriate data
  - Display Pagination component at the bottom
  - Please reffer to these images for a better understanding:-
    ![img](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-05-02/Screenshot%202023-05-02%20at%204.37.04%20PM_308063.png)

- `LoadingIndicator`

  - it has an element with the following attribute
    - `data-testid="loading-indicator"`
  - it has the text `...Loading`
  - it will be shown when the api is loading
  - Please hide all other elements in the UI when the API is loading
    ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-13/Screenshot%202023-06-13%20at%202.31.50%20PM_981116.png)

- `Pagination`

  - it will accept the following properties
    - **current** - a number representing the current page
    - **onChange** - a callback which will be given the new page number `(page)=>{})`
      - it should be added to any button (like Prev, Next and current page)
    - **total** - a number representing the total pages present in the list
  - by default the Prev button (data-testid="prev-button") should be disabled
  - the Next button (data-testid="next-button") should be disabled if you are on the last page
  - The current page should be shown in the button with data-testid `current-page`
  - The total pages should be shown in component, under the element with `data-testid="total-pages"`
    - When clicking you should make a new request and it should show the results in the UI
  - on click of any `button` the new page number will be sent to the onChange callback.
  - Please reffer to this image for a better understanding:-
    ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-05-02/Screenshot%202023-05-02%20at%204.37.27%20PM_376177.png)

- `CountriesRow`
  - Component to display information of a single country
  - it should accept the following props
    - **country** - the title of the country
      - `data-testid="country-card-name"`
    - **population** - The population of the Country
      - `data-testid="country-card-population"`

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
