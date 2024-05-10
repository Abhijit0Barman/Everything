// add js part for newItem page here
let newItemCont=document.getElementById("newitem_container")

let itemdata=JSON.parse(localStorage.getItem("items")) || []

render(itemdata)
function render(data){
    newItemCont.innerHTML=""
    data.forEach((item,index)=>{
        let h1=document.createElement('h1')
        h1.innerText="Add new item"
        
        
    })
}