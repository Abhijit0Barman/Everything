// add js part for index page here



// to add no of items
let total_items = document.getElementById("total_items");


//if items having length!=0 then Append items in this div
let items_container = document.getElementById("items_container");

let Search = document.getElementById("Search")
let search_btn = document.getElementById("search_btn")
search_btn.addEventListener("click", () => {
    let searchData=itemdata.filter((e)=>{
        if(e.title.toLowerCase().includes(Search.ariaValueMax.toLowerCase())===true){
            return true
        }else{
            h1.innerText = "Add items / Result not found";
        }
    })
})









// if items having length= 0 
let h1 = document.createElement("h1");
h1.setAttribute("id", "items_not_found_text");
h1.innerText = "Add items / Result not found";
items_container.append(h1);
// add text "Add items / Result not found" to this h1 tag

let itemdata=JSON.parse(localStorage.getItem("items")) || []
let deletedata=JSON.parse(localStorage.getItem("deleted_items")) || []

display(itemdata);
function display(data){
    items_container.innerHTML="";
    if(!itemdata.length){
        let h1=document.createElement("h1");
        h1.setAttribute("id","items_not_found_text");
        h1.innerText="Add items / Result not found"
        items_container.append(h1);
        total_items.textContent='0';
        // total_items.innerText='0';
    }


    data.forEach((ele,index)=>{
        let card=document.createElement("div");
        card.className="card"

        let cardImg=document.createElement("div");
        cardImg.className="card-img"
        card.append(cardImg,cardBody)

        let image=document.createElement("img");
        image.src=ele.image_URL;
        cardImg.append(image)
        image.setAttribute("alt","item")
        
        let cardBody=document.createElement("div");
        cardBody.className="card-body"

        let cardTitle=document.createElement("h4");
        cardTitle.className="card-title"
        cardTitle.innerText=ele.title;

        let cardPrice=document.createElement("p");
        cardPrice.className="card-price"
        cardPrice.innerText=ele.price;

        let cardQuantity=document.createElement("p");
        cardQuantity.className="card-quantity"
        cardQuantity.innerText=ele.quantity;

        let editBtn=document.createElement("button")
        editBtn.className="edit_btn"
        editBtn.innerText="Edit"

        let deleteBtn=document.createElement("button")
        deleteBtn.className="delete_btn"
        deleteBtn.innerText="Delete"

        let editDiv=document.createElement("div")
        editDiv.className="edit_div"
        editDiv.style.display="none";

        let editPrice=document.createElement("input")
        editPrice.className="edit_price"

        let editSubBtn=document.createElement("button")
        editSubBtn.className="edit_submit_button"
        editSubBtn.innerText="Submit"

        editDiv.append(editPrice,editSubBtn)

        cardBody.append(cardTitle,cardPrice,cardQuantity,editBtn,deleteBtn,editDiv)

        return card;
        
    })
}
