// event bubbling

document.querySelector(".container").addEventListener("click",function() {
    console.log("div container");
}); // div container' ın altındaki herhangi bir elemente tıklandığında da event aktifleşir

document.querySelector(".card.row").addEventListener("click",function() {
    console.log("card row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click",function() {
    console.log("card body");
});

// event capturing (delegation)

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",run);

function run(event) {
    if(event.target.clasName === "fa fa-remove") {
        console.log("Silme işlemi talebi");
    }
    if(event.target.id === "filter") {
        console.log("Filtreleme işlemi talebi");
    }
    if(event.target.id === "clear-todos") {
        console.log("Tüm taskları silme işlemi talebi");
    }
    //console.log(event.target);
}

