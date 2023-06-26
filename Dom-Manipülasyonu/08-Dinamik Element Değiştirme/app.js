// elementleri birbiri ile değiştirme

const cardBody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";

// eski element
const oldElement = document.querySelector("#tasks-title");

// replaceChild()
cardBody.replaceChild(newElement,oldElement);
