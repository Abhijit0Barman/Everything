let LSapply=localStorage.getItem("priority-list");
const tbody=document.querySelector("tbody");

if(LSapply===null){
    LSapply=[];
}else{
    LSapply=JSON.parse(LSapply);
}

Display(LSapply);
function Display(data){
    tbody.innerHTML=null;
    for(let i=0;i<data.length;i++){
        const tr=document.createElement("tr");

        const td1=document.createElement("td");
        const td2=document.createElement("td");
        const td3=document.createElement("td");
        const td4=document.createElement("td");
        const td5=document.createElement("td");
        const td6=document.createElement("td");
;

        td1.innerText=data[i].name;
        td2.innerText=data[i].desc;
        td3.innerText=data[i].start;
        td4.innerText=data[i].end;
        td5.innerText=data[i].priority;
        td6.innerText="Add To Done";
        td6.addEventListener("click",function(){

            LSapply.push(data[i]);
            localStorage.setItem("done-list",JSON.stringify(LSapply));
            
        })
  

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);


    }
}