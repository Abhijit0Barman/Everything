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
    let box=document.createElement("div");
    box.setAttribute("id","edit_div")

    let h3=document.createElement("h3");
    h3.setAttribute("id","title");
    
    let p=document.createElement("p");
    p.setAttribute("id","description")

    let editBtn=document.createElement("button");
    editBtn.setAttribute("id","edit_btn")
    editBtn.addEventListener("click",edit)

    let delBtn=document.createElement("button");
    delBtn.setAttribute("id","delete_btn")

    let editdiv=document.createElement("div");
    editdiv.id="edit_div";
    editdiv.style="display:none"

    let edip=document.createElement("p");
    edip.textContent="Title"

    let editinput=document.createElement("input");
    editinput.id="edit_title";

    let edip2=document.createElement("p");
    edip2.textContent="description"

    let editext=document.createElement("textarea");
    editext.setAttribute("id","edit_description")

    let edibut=document.createElement("button");
    edibut.setAttribute("id","edit_submit_btn");
    edibut.textContent="Submit";

    editdiv.append(edip,editinput,edip2,editext,edibut);
    box.append(h3,p,editBtn,delBtn,editdiv);
    notes_container.append(box);
}

function edit(){
    let edi=document.getElementById("edit_div");
    let flag=!true;
    if(flag){
        edi.style.display="none";
    }else{
        edi.style.display="block";
    }
}

edibut.addEventListener("click",update);
function update(){
    let editinput  = document.getElementById("editinput").value;
    let editext  = document.getElementById("editext").value;

    khali.push({ title:editinput, desc:editext })
    localStorage.setItem("notes", JSON.stringify(khali))
}