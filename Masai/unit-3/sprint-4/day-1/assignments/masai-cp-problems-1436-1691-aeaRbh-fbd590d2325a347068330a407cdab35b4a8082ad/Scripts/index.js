// add js part for index page here


let total_notes = document.getElementById("total_notes");// to add no of notes



//if notes having length!=0 then Append notes in this div
let notes_container = document.getElementById("notes_container");

// if notes having length= 0 
let h1 = document.createElement("h1");
h1.setAttribute("id", "add_notes_text");
h1.innerText = "Add notes / Result not found !";
notes_container.append(h1);

let khali = JSON.parse(localStorage.getItem("notes")) || [];
if(khali.length===0){
    console.log(0);
    total_notes.textContent=0;
}else{
    console.log(khali);
    total_notes.textContent=khali.length;
}



display();
function display(){

    let h3=document.createElement("h3");
    h3.setAttribute("id","title");
    
    let p=document.createElement("p");
    p.setAttribute("id","description")

    let editBtn=document.createElement("button");
    editBtn.setAttribute("id","edit_btn")

    let delBtn=document.createElement("button");
    delBtn.setAttribute("id","delete_btn")

    notes_container.append(h3,p,editBtn,delBtn);
}