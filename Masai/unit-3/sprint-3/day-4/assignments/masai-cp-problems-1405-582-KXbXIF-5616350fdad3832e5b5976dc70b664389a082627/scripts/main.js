// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;


loginUserButton.addEventListener("click", logIn);
getTodoButton.addEventListener("click", fetchData);

async function logIn() {
  try {
    let res = await fetch(userLoginURL, {
      method: "POST",
      body: JSON.stringify({
        username: loginUserUsername.value,
        password: loginUserPassword.value,
      }),
      headers: { "Content-type": "application/json" },
    });

    let data = await res.json();
    console.log(data);
    localStorage.setItem("localAccessToken", data.accessToken);
    localStorage.setItem("userId", data.user.id);
  } catch (err) {
    console.log(err);
  }
}

async function fetchData() {
  try {
    let userId = localStorage.getItem("userId");
    let accessToken = localStorage.getItem("localAccessToken");
    let res = await fetch(`${urlAllTodosOfUser}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function createCard(item) {
  let label = document.createElement("label");
  let inp = document.createElement("input");
  inp.className = "todo-item-checkbox";
  inp.setAttribute("data-id", item.id);
  inp.type = "checkbox";

  inp.checked = item.completed;
  inp.addEventListener("change", () => toggle(item));
  label.append(inp, item.title);
  return label;
}

function displayData(data) {
  mainSection.innerHTML = "";
  let div = document.createElement("div");
  div.id = "todo-list-wrapper";
  div.className = "todo-list-wrapper";

  data.forEach((item) => {
    div.append(createCard(item));
  });
  mainSection.append(div);
}

async function toggle(item) {

  try {
    let accessToken = localStorage.getItem("localAccessToken");

    let res = await fetch(`${baseServerURL}/todos/${item.id}`,{
      method:"PATCH",
      body:JSON.stringify({
        completed:!item.completed
      }),
      headers:{
        "Content-type":"application/json",
        Authorization:`Bearer ${accessToken}`
      }
    })
    let data=await res.json();
    console.log(data);
    fetchData();
  } 
  catch (error) {
    console.log(error);
  }

}

