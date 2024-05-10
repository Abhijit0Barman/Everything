<h1 style="color:#397ce7">React-Chakra-UI-Note-App-useReducer</h1>

<h2 style="color:red">
Submission Instructions [Please note]:
</h2>

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

<h2 style="color:red">
Installation:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the json-server

<p style="color:red">
   Note:-
</p>

1. Make sure that the Json-Server is running at port 8080
2. Use Json-Server URL as 
   <p style="color:green">
   http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}
   </p>
   Instead of using Json-Server url as  
   <p style="color:red">http://localhost:8080/</p> 

<h2 style="color:#397ce7">
Maximum Marks - 19
</h2>

```
 ✅ Able to submit the app: - 1 mark ( minimum score )
 ✅ Should have basic structure of navbar: - 2 marks
 ✅ Check for the initial state and reducer is returning state/store for invalid action type: - 1 mark
 ✅ Check if the loading skeleton is visible while data is being fetched - 2 marks
 ✅ On page load reducer is updating state for loading and notes data: - 2 marks
 ✅ Check if correct pending notes information is visible in the dom - 2 marks
 ✅ Check if correct in progress notes information is visible in the dom - 2 mark
 ✅ Check if correct completed notes information is visible in the dom - 2 mark
 ✅ Check if user is able to delete note and update in real time - 2 mark
 ✅ Check if user is able to create a new note - 3 mark
```

<h2 style="color:#397ce7">
Folder Structure (Important Files):
</h2>

```
├── src
|  ├── App.css
|  ├── App.jsx // renders Home component
|  ├── components
|  |  ├── AddNotes.jsx
|  |  ├── Home.jsx
|  |  ├── Navbar.jsx
|  |  └── NoteCard.jsx
|  ├── index.css
|  ├── index.js
|  └── reducer
|     └── reducer.js
```

<h2 style="color:#397ce7">
Problem Statement:
</h2>

- You need to create a React note taking app using `Chakra UI`.
- Users can view note details as cards. The `useReducer` hook will handle the initial state of data ( loading, error, notes ).
- Once the API request is complete, the retrieved data should be displayed as cards using `NoteCard.jsx`.

#### <span style="color:red">Note: - </span> Use of <span style="color:red">Chakra -UI, useReducer Hook and axios</span> is compulsory otherwise test cases will fail

<h3 style="color:#397ce7">
useReducer:
</h3>

- The initial state (to maintain the data that is fetched via API) will be as

```json
{
  "loading": false,
  "notes": [],
  "error": false
}
```

also in reducer if none of the action types matches; the default case should `throw` an `error` with the message `invalid action type`.

- The following action types will be triggered.

```json
"GET_NOTES_REQUEST" ? triggered while fetching data
"GET_NOTES_SUCCESS" ? triggered when fetching data is successful
"GET_NOTES_FAILURE" ? triggered when fetching data is unsuccessful
```

- `loading` should be `true` while fetching data
- store results in `notes` when fetching data is successful and `loading` should be `false`.
- if there is an error while fetching data `error` should be true.

<h2 style="color:#397ce7">
Components:
</h2>

<h3 style="color:#397ce7">
1. App.jsx
</h3>

  - It will contain only `Home.jsx` component.

<h3 style="color:#397ce7">
2. Home.jsx
</h3>

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/PYi76az.png" width="100%">
<figcaption align = "center"><b>Fig.1 - Landing page while data is being fetched</b></figcaption>
</figure>

  - Import the `Navbar.jsx` component inside the `Home.jsx` component. You can refer to the 3rd point(`Navbar.jsx section below`) in the components for implementing the navbar.
  - When the page loads, make an API request to the `/notes` endpoint in order to retrieve the notes data. To handle the API request's state, you can use the `useReducer` hook as mentioned earlier. The state managed by the useReducer hook should include the following keys: {loading, error, notes}.
  - If the API request is in progress (i.e., loading is true );
    - Show 4 Skeleton components(Give random width and height or else it will not be visible on page) from Chakra UI inside Stack (which is already given in boilerplate code with `data-cy="loading_indicator"`). Please note that this should be visible only when loading is true.
  - If the API request is successful;
    - The response will be array of note objects and each of this note object will have a key called `status`, which can be one of the following: `pending`, `in_progress`, or `completed`.
    - Create `three` sections using chakra ui `VStack` component to display the notes based on their status: "pending", "in_progress", and "completed." These sections should be placed inside a `Flex`(which is already provided with ` data-cy="notes_container"`) container.
      - Each `VStack` should have the following attributes: `data-cy="pending_notes"`, `data-cy="in_progress_notes"`, and `data-cy="completed_notes"`, corresponding to their respective statuses.
      - Inside each `VStack` section, create a title using the `Heading` component as `h1`. The titles should be `Pending`, `In Progress`, and `Completed` for their respective sections.      
      - After getting data from the API, `filter` the data locally for each status using array methods ( For example, VStack with data-cy="pending_notes" should only contain note object whose status is `pending` and so on ) and map the note's data into the `NoteCard.jsx` component below the respective heading.
      - Refer to the 5th point(`NoteCard.jsx section`) in the components for the implementation of the `NoteCard.jsx` component.

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/b39EIjl.png" width="100%">
<figcaption align = "center"><b>Fig.2 - Landing page after data fetched successfully</b></figcaption>
</figure>

<h3 style="color:#397ce7">  
3. Navbar.jsx
</h3>

  - It will contain a logo and a `Button`(Create Note) for creating a new note.
  - When the `Create Note` (should have attribute `data-cy="drawer_openBtn"`) button is clicked, open a Chakra UI Drawer component(remove `DrawerFooter` as there is no need of it).
  - Import the `AddNotes.jsx` component into the component where the Drawer is implemented.
  - Place the imported `AddNotes.jsx` component inside the body of the Drawer component.

<h3 style="color:#397ce7">
4. AddNotes.jsx
</h3>

<figure style="border: 1px solid gray; padding:5px;">
<img src="https://i.imgur.com/98YhqNN.png" width="100%">
<figcaption align = "center"><b>Fig.2 - Add Note</b></figcaption>
</figure>

  - Inside the given VStack component, please create the following components::
    - Create a `Heading` with the text `Add Note`.
    - Create a `form`(Use normal form tag) for adding a note. The form should include the following components:
      - Create a `Input` with attribute `data-cy="title"` for note title.
      - Create a `Textarea` with attribute `data-cy="description"` for note description.
      - Create a `Button` with attribute `data-cy="addBtn"` for submitting form with textContent `Add Note`.
      - The default status for the note should be `pending`.
      - Upon submitting the form(Use onSubmit to submit the form), send a POST request to `/notes` and update the DOM by making a GET request to fetch the updated notes data.

<h3 style="color:#397ce7">
5. NoteCard.jsx
</h3>

  - The `NoteCard.jsx` component will receive the note details as a prop and render them as a card.
  - Each note will be wrapped inside a Chakra UI `Box` component with the attribute `data-cy="note_card"`.(Provided in the boiler plate)
  - Inside the `Box` component, the note details will be displayed using the following components:

  ```text
    title - Heading (as = h2)
    description - Text
  ```

  - Additionally, please create the following components within the `NoteCard.jsx` component:
    - Create a `Button` component to delete the note with the attribute `data-cy="deleteBtn"` and textContent should be `Delete`.
    - When the `Delete` button is clicked(make a `DELETE` request), the note should be deleted from the database and DOM(make a GET request to refetch notes data).
    
<figure style="border: 1px solid gray; padding:5px;">
<img src="https://i.imgur.com/ShWYjsY.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Note Cards</b></figcaption>
</figure>


<h2 style="color:#397ce7">
Tested on cp.masaischool.com:         
</h2>

<figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/qTKjpuq.png" width="100%">
</figure>

<h2 style="color:red">
Important Instructions:
</h2>

- Do not remove the `data-cy` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

<h2 style="color:red">
General Instructions:
</h2>

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
