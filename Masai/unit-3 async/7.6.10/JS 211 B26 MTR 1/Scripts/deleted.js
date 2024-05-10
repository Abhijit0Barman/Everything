// add js part for deleted page here


// to add no of deleted items
let total_items = document.getElementById("total_items");
total_items.innerText = 0;

//if deleted items having length!=0 then Append deleted_items in this div
let items_container = document.getElementById("items_container");

// if deleted items having length= 0 
let h1 = document.createElement("h1");
h1.setAttribute("id", "items_not_found_text");
h1.innerText = "Add items / Result not found";
items_container.append(h1);
// add text "Add items / Result not found" to this h1 tag

let deleteData = JSON.parse(localStorage.getItem("deleted_items")) || []
let itemData = JSON.parse(localStorage.getItem("items")) || []

display(deleteData);
function display(data) {
    items_container.innerHTML = "";
    data.forEach((ele, ind) => {
        let cards = document.createElement("div");
        cards.className = "card";
        let cardImg = document.createElement("div")
        cardImg.className = "card-img"
        let image = document.createElement("img")
        image.setAttribute("alt", "item")
        let cardBody = document.createElement('div')
        cardBody.className = "card-body"
        let h4 = document.createElement("h4")
        h4.className = "title"
        h4.innerText = ele.title;
        let p1 = document.createElement("p")
        p1.className = "price"
        p1.innerText = ele.price;
        let p2 = document.createElement("p")
        p2.className = "quantity"
        p2.innerText = ele.quantity;
        let button = document.createElement("button")
        button.className = "addAgain_btn"
        button.innerText = "Add again"
        button.addEventListener("click",()=>{
            itemData.push(ele)
            localStorage.setItem("items",JSON.stringify(itemData))
            deleteData.splice(index,1);
            localStorage.setItem("deleted_items",JSON.stringify(deleteData))
            display(data)
        })

        cardImg.append(image)
        cardBody.append(h4, p1, p2, button)
        cards.append(cardImg, cardBody)
        items_container.append(cards)

        total_items.innerText = deleteData.length;
    })
}