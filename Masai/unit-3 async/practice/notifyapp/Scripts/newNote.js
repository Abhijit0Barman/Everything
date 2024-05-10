// add js part for newNote page here


let total_notes = document.getElementById("total_notes");// to add no of notes
let LSnote=JSON.parse(localStorage.getItem('notes')) || [];

notediv()
function notediv(){
let newNotediv=document.getElementById('newNote_container');
let p=document.createElement('p');
p.textContent='Title'

let inp=document.createElement('input');
inp.setAttribute('id','new_title')
inp.setAttribute('type','text')

let p2=document.createElement('p');
p2.textContent='description'

let text=document.createElement('textarea');
text.setAttribute('id','new_description')
text.setAttribute('type','text')

let submit=document.createElement('button')
submit.setAttribute('id','add_note')
submit.textContent='Submit'
submit.addEventListener('click',data)


newNotediv.append(p,inp,p2,text,submit)
total_notes.textContent=LSnote.length;
}

function data(){
    let title=document.getElementById('new_title').value;
    let description=document.getElementById('new_description').value;
    LSnote.push({title,description})
    localStorage.setItem('notes',JSON.stringify(LSnote))
    
    
}

