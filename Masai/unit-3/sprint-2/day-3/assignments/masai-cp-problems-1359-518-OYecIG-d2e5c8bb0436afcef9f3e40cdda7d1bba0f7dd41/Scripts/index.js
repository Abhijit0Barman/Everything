let form=document.querySelector("form")
let formData=JSON.parse(localStorage.getItem("task-list"))||[]

form.addEventListener("submit",SaveData)

function SaveData(e){
    e.preventDefault()
    let name=document.getElementById("name").value
    let desc=document.getElementById("desc").value
    let start=document.getElementById("start").value
    let end=document.getElementById("end").value

    let priority=document.getElementById("priority").value
    formData.push({name,desc,start,end,priority})
    localStorage.setItem("task-list",JSON.stringify(formData))
}
