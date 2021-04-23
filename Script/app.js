const title = document.querySelector("#input-title");
const author = document.querySelector("#input-author");
const year = document.querySelector("#input-year");
const btn = document.querySelector(".btn-book");
const add = document.querySelector("#tbody");

btn.addEventListener("click", function(e){
    e.preventDefault()
    if(title.value == "" && author.value == "" && year.value == ""){
        // const close = document.getElementById("close");
        // const popep = document.querySelector(".popup")
        
        // close.addEventListener("click",function(){
        //     popep.setAttribute("style", "opacity: 10;")
        // })
        alert("Sorry you didn't mention anything!")
    }else{
        // New Title
        const newRow = document.createElement("tr");

        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // New author
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // New Year
        const newyear = document.createElement("th");
        newyear.innerHTML = year.value;
        newRow.appendChild(newyear);

        add.appendChild(newRow)
    }
})