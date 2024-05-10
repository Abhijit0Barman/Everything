
let job=document.getElementById("job-count");
let LSdata=localStorage.getItem("job-list");
let LSapply=localStorage.getItem("apply-list");
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

let count=0;
job.innerText=count;

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
        const td8=document.createElement("td");
        const td9=document.createElement("td");

        td1.innerText=data[i].name;
        td2.innerText=data[i].position;
        td3.innerText=data[i].addDate;
        td4.innerText=data[i].salary;
        td5.innerText=data[i].location;
        td6.innerText=data[i].email;
        td7.innerText=data[i].type;
        td8.innerText="apply";
        td8.addEventListener("click",function(){
            count++;
            LSapply.push(data[i]);
            localStorage.setItem("apply-list",JSON.stringify(LSapply));
        })
        td9.innerText="delete";
        td9.addEventListener("click",function(){
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
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
        tbody.append(tr);


    }
}
