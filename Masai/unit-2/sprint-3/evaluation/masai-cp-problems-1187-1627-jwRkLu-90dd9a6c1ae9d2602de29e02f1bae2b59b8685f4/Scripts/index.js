let form=document.querySelector("form")

form.addEventListener("submit",SaveData)
let formData=JSON.parse(localStorage.getItem("job-list"))||[]

function SaveData(e){
    e.preventDefault()
    let name=document.getElementById("name").value
    let position=document.getElementById("position").value
    let addDate=document.getElementById("addDate").value
    let salary=document.getElementById("salary").value
    let location=document.getElementById("location").value
    let email=document.getElementById("email").value
    let type=document.getElementById("type").value
    formData.push({name,position,addDate,salary,location,email,type})
    localStorage.setItem("job-list",JSON.stringify(formData))
}

