// Klavye eventleri

// keypress -> sadece harflere ve sayılara basıldığında

document.addEventListener("keypress",run);

function run(event) {
    console.log("Tuşa Basıldı");
    console.log(event.key); // event.key -> basılan tuşu gösterir
}

// keydown -> aşağı-yukarı-sağ-sol tuşlarını da takip eder

document.addEventListener("keydown",run);

function run(event) {
    console.log("Tuşa Basıldı");
    console.log(event.key); // event.key -> basılan tuşu gösterir
}

// keyup -> bir tuşa basmayı bıraktığımızda takip eder

document.addEventListener("keyup",run);

function run(event) {
    console.log("Tuşa Basıldı");
    console.log(event.key); // event.key -> basılan tuşu gösterir
}


const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(event) {
    header.textContent = event.target.value;
    //event.target.value => input alanındaki yazıyı alır
}

