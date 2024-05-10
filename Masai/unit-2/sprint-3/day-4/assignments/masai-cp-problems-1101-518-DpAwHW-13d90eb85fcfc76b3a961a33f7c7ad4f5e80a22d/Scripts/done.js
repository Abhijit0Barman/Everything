let DoneList = JSON.parse(localStorage.getItem("done-list")) || [];
function ShowData() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  DoneList.forEach((Task, index1) => {
    let Tr = document.createElement("tr");
    let Td1 = document.createElement("td");
    let Td2 = document.createElement("td");
    let Td3 = document.createElement("td");
    let Td4 = document.createElement("td");
    let Td5 = document.createElement("td");

    Td1.innerText = Task.TaskName;
    Td2.innerText = Task.Description;
    Td3.innerText = Task.StartDate;
    Td4.innerText = Task.EndDate;
    Td5.innerText = Task.Priority;

    Tr.append(Td1, Td2, Td3, Td4, Td5);
    tbody.append(Tr);
  });
}

ShowData();
