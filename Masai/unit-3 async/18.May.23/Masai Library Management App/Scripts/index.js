// you can write your js code here
let form = document.querySelector("form");
let formData = JSON.parse(localStorage.getItem("book-list")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let Bookname = document.getElementById("name").value;
    let Bookauthor = document.getElementById("author").value;
    let Bookdesc = document.getElementById("desc").value;
    let Bookadded = document.getElementById("added").value;
    let Bookcategory = document.getElementById("category").value;
    let Bookprice = document.getElementById("price").value;
    
    formData.push({ Bookname, Bookauthor, Bookdesc, Bookadded, Bookcategory, Bookprice });
    localStorage.setItem("book-list", JSON.stringify(formData));

    console.log('Task stored in local storage!');
    // ===================================================================
    // let obj={
    //     name:form.name.value,
    //     author:form.author.value,
    //     desc:form.desc.value,
    //     added:form.added.value,
    //     category:form.category.value,
    //     price:form.price.value,
    // };
    // formData.push(obj);
    // localStorage.setItem("book-list",JSON.stringify(formData));

    form.reset()
});
