let tbody = document.querySelector("tbody");
let lsData = JSON.parse(localStorage.getItem("book-list"));

let filterby = document.getElementById("filter");
filterby.addEventListener("change", display);

let bookmarkList=JSON.parse(localStorage.getItem("bookmark-list")) || [];
let buyList=JSON.parse(localStorage.getItem("buy-list")) || [];

display();

function display() {
    let filteredData = lsData;

    if (filterby.value !== "") {
        filteredData = lsData.filter((e) => {
            return e.Bookcategory === filterby.value;
        });
    }

    tbody.innerHTML = "";

    filteredData.forEach((item,index1) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = item.Bookname;
        let td2 = document.createElement("td");
        td2.innerText = item.Bookauthor;
        let td3 = document.createElement("td");
        td3.innerText = item.Bookdesc;
        let td4 = document.createElement("td");
        td4.innerText = item.Bookadded;
        let td5 = document.createElement("td");
        td5.innerText = item.Bookcategory;
        let td6 = document.createElement("td");
        td6.innerText = item.Bookprice;
        let td7 = document.createElement("td");
        td7.innerText = "Buy";
        let td8 = document.createElement("td");
        td8.innerText = "Add";

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);

        td7.addEventListener("click", () => {
            buyList.push(item);
            localStorage.setItem("buy-list",JSON.stringify(buyList))
            lsData=lsData.filter((element,index2)=>index1!==index2)
            localStorage.setItem("book-list",JSON.stringify(lsData))
            display()
        })


        td8.addEventListener("click", () => {
            bookmarkList.push(item);
            localStorage.setItem("bookmark-list",JSON.stringify(bookmarkList))
            lsData=lsData.filter((element,index2)=>index1!==index2)
            localStorage.setItem("book-list",JSON.stringify(lsData))
            display()
        })
    });

    document.querySelector("#book-count").innerText = filteredData.length;
}
