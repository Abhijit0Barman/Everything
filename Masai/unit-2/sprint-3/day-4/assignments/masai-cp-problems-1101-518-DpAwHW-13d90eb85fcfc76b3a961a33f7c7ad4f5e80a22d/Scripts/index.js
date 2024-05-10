// Write code related to Home page here 
let TaskList=JSON.parse(localStorage.getItem("task-list"))||[]
let form=document.querySelector("form")
form.addEventListener("submit",SaveData)
 function SaveData(e){
    e.preventDefault()
  let TaskName=document.getElementById("name").value
  let Description=document.getElementById("desc").value
  let StartDate=document.getElementById("start").value
  let EndDate=document.getElementById("end").value
  let Priority=document.getElementById("priority").value
   TaskList.push({TaskName,Description,StartDate,EndDate,Priority})
   localStorage.setItem("task-list",JSON.stringify(TaskList))

 }

