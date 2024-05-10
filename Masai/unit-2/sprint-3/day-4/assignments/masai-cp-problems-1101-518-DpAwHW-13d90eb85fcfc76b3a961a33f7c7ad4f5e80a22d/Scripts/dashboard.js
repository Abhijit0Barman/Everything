// Write code related to dashboard page here

let Filterby = document.getElementById("filter");
Filterby.addEventListener("change", ShowData);
let PriorityList=JSON.parse(localStorage.getItem("priority-list"))||[]
function ShowData() {
  let TaskList = JSON.parse(localStorage.getItem("task-list"))||[]
  if (Filterby.value !== "") {
    TaskList = TaskList.filter((el) => {
      return el.Priority === Filterby.value;
    });
  }

  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  TaskList.forEach((Task,index1) => {
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
    PriorityList.push(Task);
    localStorage.setItem("priority-list",JSON.stringify(PriorityList))

    TaskList=TaskList.filter((el,index2)=>{
        return index1!=index2
    }
        )
    localStorage.setItem("task-list",JSON.stringify(TaskList))
    ShowData()

    })

    Tr.append(Td1, Td2, Td3, Td4, Td5, Add);
    tbody.append(Tr);
  });

let TotalTask=document.getElementById("task-count")
 TotalTask.innerText=TaskList.length;

}

ShowData();
