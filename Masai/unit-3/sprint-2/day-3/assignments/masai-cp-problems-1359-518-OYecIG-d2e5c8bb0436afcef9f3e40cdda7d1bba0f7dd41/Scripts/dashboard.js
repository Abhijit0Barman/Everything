let job=document.getElementById("task-count");
let LSdata=localStorage.getItem("task-list");
let LSapply=localStorage.getItem("priority-list");
let LSdelete=localStorage.getItem("delete-list");
const tbody=document.querySelector("tbody");
if(LSdata===null){
    LSdata=[];
}else{
    LSdata=JSON.parse(LSdata);
}

if(LSapply===null){
    LSapply=[];
}else{
    LSapply=JSON.parse(LSapply);
}
// let showcount=document.querySelector("#task-count").value;
let count=0;
// showcount.innerText=count;

Display(LSdata);
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
        const td7=document.createElement("td");

        td1.innerText=data[i].name;
        td2.innerText=data[i].desc;
        td3.innerText=data[i].start;
        td4.innerText=data[i].end;
        td5.innerText=data[i].priority;

        td6.innerText="Add To Progress";
        td6.addEventListener("click",function(){
            count++;
            LSapply.push(data[i]);
            localStorage.setItem("priority-list",JSON.stringify(LSapply));
            
        })
        td7.innerText="delete";
        td7.addEventListener("click",function(){
            count--;
            LSdata=LSdata.filter(function(e,ind){
                if(i===ind){
                    return false;
                }else{
                    return true;
                }
            })
            localStorage.setItem("delete-list",JSON.stringify(LSdelete));
            
            localStorage.setItem("delete-list",JSON.stringify(LSdata));
            Display(LSdata);
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);


    }
}
