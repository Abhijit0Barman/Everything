let tbody = document.querySelector("tbody");

let buyList = JSON.parse(localStorage.getItem("buy-list")) || [];

display();
function display() {
    tbody.innerHTML = "";

    buyList.forEach((item) => {
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

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    });
}
