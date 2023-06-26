const filterInput = document.getElementById("filter");

// 1.yöntem : 
// filterInput.onfocus = function(){
//     console.log("Arama kısmına tıklandı");
// }

// 2.yöntem :
filterInput.addEventListener("focus",function(event) {
    console.log("Arama kısmına tıklandı");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.placeholder);
    console.log(event.target.className);
});

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(event) {
    console.log("Submit Eventi");

    event.preventDefault();

}
