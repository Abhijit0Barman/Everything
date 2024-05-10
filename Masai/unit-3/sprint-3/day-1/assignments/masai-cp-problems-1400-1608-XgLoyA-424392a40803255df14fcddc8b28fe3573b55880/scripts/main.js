// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;

// Append div to main section
let mainSection = document.getElementById("data-list-wrapper");

//  add employees
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");

//Sorting 
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

//Filter 
let filterLessThan1LBtn = document.getElementById("filter-less-than-1L");
let filterMoreThanEqualLBtn = document.getElementById("filter-more-than-equal-1L");

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById("update-score-employee-salary");
let updateScoreEmpSalaryButton = document.getElementById("update-score-employee");

//Employee Data
let employeesData = [];

fetchData();

function fetchData() {
  fetch(employeeURL)
    .then(res => res.json())
    .then(data => {appeendData(data); employeesData=data})
    .catch((err) => console.log(err))
}

function appeendData(data) {
  mainSection.innerHTML = "";
  let card_list = document.createElement("div");
  card_list.className = "card-list";
  mainSection.append(card_list);
  data.forEach(item => {
    // card_list.append(createCard(item))
    let card = createCard(item);
    card_list.append(card);
  });
}

function createCard(item) {
  let divcard = document.createElement("div");
  divcard.className = "card";
  divcard.setAttribute("data-id", item.id);

  let divimg = document.createElement("div");
  divimg.className = "card-img";

  let img = document.createElement("img");
  img.src = `${baseServerURL}${item.image}`;
  img.setAttribute("alt", "employee");

  divimg.append(img);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let h3 = document.createElement("h3");
  h3.className = "class-title";
  h3.textContent = item.name;

  let cardSalary = document.createElement("div");
  cardSalary.className = "card-salary";
  cardSalary.textContent = item.salary;

  let a = document.createElement("a");
  a.href = "#";
  a.setAttribute("data-id", item.id); //err1
  a.className = "card-link";
  a.textContent = "Edit";

  cardBody.append(h3, cardSalary, a);
  divcard.append(divimg, cardBody);

  return divcard;    //err2
}

// UPDATE ALL
updateEmpUpdateBtn.addEventListener("click", () => {
  editData(updateEmpIdInput.value)           //err3
});
function editData(id) {
  fetch(`${employeeURL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(
        {
          name: updateEmpNameInput.value,
          image: updateEmpImageInput.value,
          department: updateEmpDeptInput.value,
          salary: updateEmpSalaryInput.value,
        }
      ),
      headers: { "Content-type": "application/json" },  //err4
    })
    .then(res => res.json())
    .then(data => { console.log(data); fetchData(); })
    .catch(error => { console.log(error) })
}

// Add new employee
empCreateBtn.addEventListener("click", () => {
  // Create employee object with input values
  let newEmployee = {
    name: empNameInput.value,
    image: empImgInput.value,
    department: empDeptInput.value,
    salary: empSalaryInput.value
  };
  // Make POST request to add new employee
  fetch(employeeURL, {
    method: "POST",
    body: JSON.stringify(newEmployee),
    headers: { "Content-type": "application/json" }
  }).then(res => res.json())
    .then(data => { console.log(data); fetchData(); })  // Refresh employee list  
    .catch(error => { console.log(error); });
});

//UPDATE ONLY SALARY
updateScoreEmpSalaryButton.addEventListener("click", () => {
  editEmployeeSalary(updateScoreEmpId.value);
});

function editEmployeeSalary(id) {
  fetch(`${employeeURL}/${id}`,
    {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(
        {
          salary: updateScoreEmpSalary.value,
        }
      )
    })
    .then(res => res.json())
    .then(data => { console.log(data); fetchData(); })
    .catch(error => { console.log(error) })
}

//SORTING
function sortBySalary(employee1, employee2) {
  return employee1.salary - employee2.salary;
}

sortAtoZBtn.addEventListener("click", () => {
  employeesData.sort(sortBySalary);
  appeendData(employeesData);
});

sortZtoABtn.addEventListener("click", () => {
  employeesData.sort((employee1, employee2) => sortBySalary(employee2, employee1));
  appeendData(employeesData);
});

//FILTER
function filterBySalary(minSalary, maxSalary) {
  let filteredData = employeesData.filter(employee => {
    return employee.salary >= minSalary && employee.salary <= maxSalary;
  });
  appeendData(filteredData);
}

filterLessThan1LBtn.addEventListener("click", () => {
  filterBySalary(0, 100000);
});

filterMoreThanEqualLBtn.addEventListener("click", () => {
  filterBySalary(100000, Number.MAX_VALUE);
});
