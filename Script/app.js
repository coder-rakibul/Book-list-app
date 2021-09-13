const title = document.querySelector("#input-title");
const author = document.querySelector("#input-author");
const year = document.querySelector("#input-year");
const btn = document.querySelector(".btn-book");
const add = document.querySelector("#tbody");

btn.addEventListener("click", function (e) {
    e.preventDefault() 
    console.log([
        title.value,
        author.value,
        year.value
    ]);
    if (!title.value && !author.value && !year.value) {
        alert("Sorry you didn't mention anything!")
    } else if (!title.value) {
        alert("Plese manthon your book name")
    } else if (!author.value) {
        alert("Plese mathon your book athor name.")
    } else if (!year.value){
        alert("Plese mathon your favrat book reles year")
    }
    else {
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

    title.value = "";
    year.value = "";
    author.value = "";


})