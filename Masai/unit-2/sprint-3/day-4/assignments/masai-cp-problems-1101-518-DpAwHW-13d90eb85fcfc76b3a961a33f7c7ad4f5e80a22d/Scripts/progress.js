
let ProgressList=JSON.parse(localStorage.getItem("priority-list"))||[]
let DoneList=JSON.parse(localStorage.getItem("done-list"))||[]
function ShowData() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  ProgressList.forEach((Task,index1) => {
    let Tr = document.createElement("tr");
    let Td1 = document.createElement("td");
    let Td2 = document.createElement("td");
    let Td3 = document.createElement("td");
    let Td4 = document.createElement("td");
    let Td5 = document.createElement("td");
    let Add = document.createElement("td");
    Td1.innerText = Task.TaskName;
    Td2.innerText = Task.Description;
    Td3.innerText = Task.StartDate;
    Td4.innerText = Task.EndDate;
    Td5.innerText = Task.Priority;
    Add.innerText = "Add";
    Add.addEventListener("click",()=>{
    DoneList.push(Task);
    localStorage.setItem("done-list",JSON.stringify(DoneList))
    ProgressList=ProgressList.filter((el,index2)=>{
        return index1!=index2
    }
        )
    localStorage.setItem("priority-list",JSON.stringify(ProgressList))
    ShowData()

    })

    Tr.append(Td1, Td2, Td3, Td4, Td5, Add);
    tbody.append(Tr);
  });


}

ShowData();
