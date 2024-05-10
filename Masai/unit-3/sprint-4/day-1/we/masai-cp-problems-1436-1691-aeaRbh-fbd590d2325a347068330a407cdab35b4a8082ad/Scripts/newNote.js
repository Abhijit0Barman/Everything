// add js part for newNote page here


let total_notes = document.getElementById("total_notes");// to add no of notes


let khali = JSON.parse(localStorage.getItem("notes")) || [];
if (khali.length === 0) {
    console.log(0);
    total_notes.textContent = 0;
} else {
    console.log(khali);
    total_notes.textContent = khali.length;
}

let div = document.createElement("div");
div.setAttribute("id", "newNote_container");

let cre = document.createElement("input");
cre.setAttribute("id", "new_title");
cre.type = Text;

let area = document.createElement("textarea");
area.setAttribute("id", "new_description");
area.type = Text;

let btn = document.createElement("button");
btn.setAttribute("id", "add_note");
btn.addEventListener("click", sub)

function sub() {
    let title = document.getElementById("new_title").value;
    let desc = document.getElementById("new_description").value;
    khali.push({ title, desc })
    localStorage.setItem("notes", JSON.stringify(khali))
    // display();
};

// display();
// function display() {
//     let obj = {};

//     total_notes.append(title, desc);
//     return obj;
// }