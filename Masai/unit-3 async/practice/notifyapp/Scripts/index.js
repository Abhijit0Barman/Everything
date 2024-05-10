// add js part for index page here


let total_notes = document.getElementById("total_notes");// to add no of notes
let LSnote=JSON.parse(localStorage.getItem('notes')) || [];
// if(LSnote.length===0){
    total_notes.textContent=0

// }else{
    // total_notes.textContent=LSnote.length;
// }
let LSdel=JSON.parse(localStorage.getItem('deleted_notes')) || [];

//if notes having length!=0 then Append notes in this div
let notes_container = document.getElementById("notes_container");
append(LSnote)
function append(data){
    notes_container.innerHTML='';
    data.forEach((item,index)=>{
        let div=document.createElement('div')
        div.setAttribute('id','box')
        let h3=document.createElement('h3');
        h3.setAttribute('id','title')
        h3.textContent=item.title;

        let p=document.createElement('p');
        p.setAttribute('id','description')
        p.textContent=item.description;

        let edtbtn=document.createElement('button');
        edtbtn.setAttribute('id','edit_btn')
        edtbtn.style.backgroundColor='Green'
        edtbtn.textContent='Edit'
        edtbtn.addEventListener('click',function(){
            edtbtn.style.display='block';
            edtinp.textContent=item.title;
            text.textContent=item.description
        })

        let dltbtn=document.createElement('button')
        dltbtn.setAttribute('id','delete_btn');
        dltbtn.style.backgroundColor='Red'
        dltbtn.textContent='Delete'
        dltbtn.addEventListener('click',function(){

            LSdel.push(item)
            localStorage.setItem('deleted_notes',JSON.stringify(LSdel));

            
            data.splice(index,1)
            append(data)
        })

        let edit=document.createElement('div')
        edit.setAttribute('id','edit_div')
        edit.style.display='none'

        let editp=document.createElement('p');
        editp.textContent='Title'

        let edtinp=document.createElement('input');
        edtinp.setAttribute('id','edit_title')
        edtinp.setAttribute('type','text')

        let descP=document.createElement('p');
        descP.textContent='description'

        let text=document.createElement('textarea');
        text.setAttribute('id','edit_description')
        text.setAttribute('type','text')

        let editbtn=document.createElement('button');
        editbtn.setAttribute('id','edit_submit_btn')
        editbtn.textContent='Submit'

        edit.append(editp,edtinp,descP,text,editbtn)
        div.append(h3,p,edtbtn,dltbtn,edit)
        notes_container.append(div)
    })

    total_notes.textContent=data.length;
}

let search=document.querySelector('#Search');
let srcbtn=document.querySelector('#search_btn')
srcbtn.addEventListener('click',function(){
    let fltrd=LSnote.filter(function(elem){
        if(elem.title.toLowerCase().includes(search.value.toLowerCase())===true){
            return true
        }else{
            return false
        }
    })
    append(fltrd)
})
// if notes having length= 0 
let h1 = document.createElement("h1");
h1.setAttribute("id", "add_notes_text");
if(LSnote.length===0){
    h1.innerText = "Add notes / Result not found !";
}
notes_container.append(h1);



