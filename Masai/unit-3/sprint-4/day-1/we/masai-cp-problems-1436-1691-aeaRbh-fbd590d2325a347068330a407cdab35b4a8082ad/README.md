# WEB - note-taking-app(Notify)

## Submission Instructions [Please note]

## Maximum Marks - 19

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Should have initial structure as expected - 1 mark.
 ✅ Adding new note 1 - 1 mark.
 ✅ Adding new note 2 - 1 mark.
 ✅ Check if data added to dom successfully - 2 marks.
 ✅ Check if data added to local storage successfully - 1 mark.
 ✅ Check total notes in the navbar should increase as a new note is added - 1 mark.
 ✅ Check if search functionality working on the title of the note - 1 mark.
 ✅ Check delete functionality and dom updated after the note is deleted - 1 mark.
 ✅ Check if data is updated in local storage successfully after deleting note - 1 mark.
 ✅ Check if deleted page working expected - 1 mark.
 ✅ Check if the add again button working expected - 2 marks.
 ✅ Check if the local storage data of notes updated successfully after addAgain - 2 marks.
 ✅ Check if the edit working as expected - 2 marks.
 ✅ Check edit part updated in local Storage successfully - 1 mark.
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate
- Navigate to the correct path

### Note : *ignore the fdprocessedid part in all screenshot images*.

## Folder structure

- index.html
- newNote.html
- deleted.html
- Scripts
    - index.js
    - deleted.js
    - newNote.js
- Styles
    - index.css
    - deleted.css
    - newNote.css
- Please ignore all the other files/folders except the above-mentioned ones.
- Styles folder include different style files add your CSS in these files.

### You haven't taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Build a note-taking App where you can add all your notes.
- Your application has a Navbar (this is already in the template no need to build it).
  1. Notify(index.html)
  2. newNote+(newNote.html)
  3. Deleted(deleted.html)
  4. Search functionality
  5. Total Notes part

### 1. Basic structure on Home Page (index.html):-

![landing page default](https://user-images.githubusercontent.com/101581634/233960134-3628c5cd-237d-40d0-9380-e73df9baece4.png)

- if notes are not present in local Storage show the message `Add notes / Result not found !` in the `h1` tag with `id="add_notes_text"`.

- **Total Notes** must be updated with no .of notes present by default it should be Total Notes:`0` has `id="total_notes"`

- **search and total notes markup** 
![search and total notes](https://user-images.githubusercontent.com/101581634/234566407-387da4bb-6e16-4b12-be97-e823233346fa.png)

- above search and total note’s part is already created in the template no need to build it, it is for understanding purposes.

- on clicking `New Note+` user should redirect to the `newNote.html` page.

- on clicking `Deleted` the user should redirect to the `deleted.html` page.

### 2. newNote Page (newNote.html):-
- **newNote page markup**
![newNote markup](https://user-images.githubusercontent.com/101581634/234566403-0c9daff1-41b0-46b9-b6b7-0edb07e635bf.png)

- On this page add a div with `id="newNote_container"`
- newNote page must include 
 1. input with `id="new_title"` to add title.(type=text)
 2. textarea with `id="new_description"` to add description.(type=text)
 3. add submit button with `id="add_note"` add this part on **`newNote.html`** page.

- On clicking on submit button you should store notes data in your local storage with the key `notes`.

- `Example object `
```
const note = {
  title: Web developer 
  description: A web developer is a programmer who develops World Wide Web applications using a client–server model. 
}
```
follow the above object schema while storing your data in local storage.

`Hint: localStorage.setItem("notes", JSON.stringify)`

- Refer to this image for a better understanding:- 

![AddNote page](https://user-images.githubusercontent.com/101581634/233968119-6dd61974-7906-412f-880e-0c255285ceeb.png)

### 3. note on index/Home page:-

- note must be added to dom and local storage and update total notes part in navbar as Total Notes:`1`

- Append the notes to div with `id="notes_container"`.
 1. h3 tag for the title of note with id `title`.
 2. p tag for the description of note with id `description`.
 3. edit button with id `edit_btn`.
 4. delete button with id `delete_btn`.

![landing page 2](https://user-images.githubusercontent.com/101581634/233969090-e9d0a4fd-2c8e-4a84-ba35-4144bc90b0e1.png)

- Refer to this doc to understand how to work with textarea - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

### 4. Edit functionality on index/Home page:-

- **note markup**
![indexpage markup](https://user-images.githubusercontent.com/101581634/234566379-457e85e4-5f01-4edd-b0d4-691fbea445ef.png)
*ignore the fdprocessedid="aub8l3" and fdprocessedid="gbxn" part*.

- on clicking the edit button the div with `id=edit_div` must be visible and again if we click Submit button the must not be visible. 
`Hint`:- use *div. style.display* property.

- the edit div contain must contain
1. input with value for particular clicked note with `id="edit_title"`.
2. textarea with value for particular clicked note with `id="edit_description"`.
3. submit button with `id="edit_submit_btn"` you can refer to `note markup` screenshot for a better understanding

- Refer to this doc to understand how to work with textarea - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

- if we updated the title, and description after clicking submit button the dom should update, and also the local storage 

- Refer to this image for a better understanding:- 
![edit1](https://user-images.githubusercontent.com/101581634/233985093-352934b8-cf09-4b5f-9efb-44c05c55374b.png)

- index page updated with edited data

![edit 2](https://user-images.githubusercontent.com/101581634/233985079-40639879-f046-4b7b-aa01-d8c67d566f02.png)

- while editing/deleting a particular note you can use the hint given below
```
data.map((elem, i) => {
  // to catch particular element use i(index) while mapping data
})
```
### 5. Delete functionality on index/Home page:-

- if the user clicked on the delete button that particular note is removed from dom and local storage (from the `notes` array).

- at the same time add that deleted note to local Storage with a new key as `deleted_notes`.

`Hint:- localStorage.setItem("deleted_notes", JSON.stringify(deleted_notes))`

### 6. Search functionality on the Index page:-

- when the user adds text to the search input box in the navbar with `id="Search"` and clicks the button search with `id="search_btn"`.

- if the user adds text to the input box and if the `title` of notes includes that then show only those notes after clicking the search button.

- if not a single note's title having search text then show text with the h1 tag as `Add notes / Result not found !` in the `h1` tag with `id="add_notes_text"`

![search result](https://user-images.githubusercontent.com/101581634/233974136-6aed5ff2-cf17-4072-9b9d-be3eb2b771fd.png)


### 7. deleted page:-
![deleted page 2](https://user-images.githubusercontent.com/101581634/233978926-cde7b26b-fc48-4b3e-8237-e32f48346ab0.png)

- deleted page markup

![deleted page markup](https://user-images.githubusercontent.com/101581634/234566412-deef02b0-de5f-411b-9867-3cfba6643e8c.png)

- append all the `deleted_notes` from local storage on this page with 
 1. h3 tag for the title of note with id `title`.
 2. p tag for the description of note with id `description`.
 3. Add again button with id `addAgain_btn`.

- also on the top navbar update the total Notes status with total `no. of deleted notes `.

- on clicking the **` Add again`** button the note is removed from the delete page dom and local Storage with key `deleted_notes` and again added to local Storage with key `notes`. 

- refer below to the local storage image for a better understanding. 
![LS deleted notes](https://user-images.githubusercontent.com/101581634/233980590-f38f0188-f457-437e-9900-ee348b3032f2.png)
![LS notes](https://user-images.githubusercontent.com/101581634/233980598-c66634e5-6691-4cd8-bb22-3b471c2b0960.png)



**Hint**: while implementing search functionality first convert input text to `LowerCase` and then try to find if it is included in the title of the note you can refer to these links for a better understanding
1. [String.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) 
2. [String.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).


### Example usage
```
let title = "Web developer" ;
let search_input_value = "web";
title.toLowerCase().includes(search_input_value.toLowerCase())
```
**Note**: bonus if you added search functionality on deleted.html page but for index/home page its compulsory 


### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
