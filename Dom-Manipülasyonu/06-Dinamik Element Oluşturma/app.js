// Yeni element oluşturma
const newLink = document.createElement("a"); 
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-warning";
newLink.href = "https://github.com/Furkan-Boncuk/Javascript-Tutorial";
newLink.target = "_blank";
newLink.style.marginLeft = "50px";

// textNode
newLink.appendChild(document.createTextNode("Javascript Tutorial"));

cardBody.appendChild(newLink);

console.log(newLink);
