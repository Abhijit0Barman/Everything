const myform = document.querySelector("form");
const taskInp = document.getElementById("task");
const prioritySelect = document.getElementById("priority");
const tbody = document.querySelector("tbody");

let GLOBAL_DATA = [];
myform.addEventListener("submit", function (e) {
    e.preventDefault();

    const DATA = {
        task: taskInp.value,
        priority: prioritySelect.value,
    };
    GLOBAL_DATA.push(DATA);
    tbody.innerHTML =null;

    for(let i=0;i<GLOBAL_DATA.length;i++) {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        td1.innerText = GLOBAL_DATA[i].task;
        td2.innerText = GLOBAL_DATA[i].priority;
        tr.append(td1, td2);
        tbody.append(tr);
    }
})
