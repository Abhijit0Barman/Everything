// add js part for deleted page here


let total_notes = document.getElementById("total_notes");// to add no of deleted notes

//if deleted notes having length !=0 then Append deleted_notes in this div
let notes_container = document.getElementById("notes_container");

// if deleted notes having length= 0 
let h1 = document.createElement("h1");
h1.setAttribute("id", "add_notes_text");
h1.innerText = "Add notes / Result not found !";
notes_container.append(h1);


