// add js part for deleted page here


let total_notes = document.getElementById("total_notes");// to add no of deleted notes


let LSdel=JSON.parse(localStorage.getItem('deleted_notes')) || [];

let LSnote=JSON.parse(localStorage.getItem('notes')) || [];



//if deleted notes having length !=0 then Append deleted_notes in this div
let notes_container = document.getElementById("notes_container");

append(LSdel)
function append(data){
    notes_container.innerHTML='';
    data.forEach((item,index) => {
        let div=document.createElement('div')
        div.setAttribute('id','box')

        let h3=document.createElement('h3');
        h3.setAttribute('id','title')
        h3.textContent=item.title;

        let p=document.createElement('p');
        p.setAttribute('id','description')
        p.textContent=item.description;

        let btn=document.createElement('button')
        btn.setAttribute('id','addAgain_btn')
        btn.textContent='Add again'

        btn.addEventListener('click',function(){
            LSnote.push(item);
            localStorage.setItem('notes',JSON.stringify(LSnote))


            data.splice(index,1)
            append(data)
        })

        div.append(h3,p,btn)
        notes_container.append(div)
    });

    total_notes.textContent=data.length;
}

// if deleted notes having length= 0 

let h1 = document.createElement("h1");
h1.setAttribute("id", "add_notes_text");
if(total_notes.textContent==0){

    h1.innerText = "Add notes / Result not found !";
}
notes_container.append(h1);


