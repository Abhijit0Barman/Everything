let LSapply=localStorage.getItem("apply-list");
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
        const td7=document.createElement("td");
;

        td1.innerText=data[i].name;
        td2.innerText=data[i].position;
        td3.innerText=data[i].addDate;
        td4.innerText=data[i].salary;
        td5.innerText=data[i].location;
        td6.innerText=data[i].email;
        td7.innerText=data[i].type;

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(tr);


    }
}