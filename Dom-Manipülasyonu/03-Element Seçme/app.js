let element;

// id ile element seçme
element = document.getElementById("todo-form");

element = document.getElementById("tasks-title");

// class ile element seçme
element = document.getElementsByClassName("list-group-item");

element = document.getElementsByClassName("list-group-item")[0];

element = document.getElementsByClassName("card-header");

// tag' e göre seçme
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// query selector - CSS selector
    // querySelector -> tek bir element getirir

element = document.querySelector("#tasks-title"); // id sadece bir tane olur

element = document.querySelectorAll(".list-group-item");

element = document.querySelectorAll("div"); // NodeList döner

element.forEach(function(elmnt) {
    console.log(elmnt);
}); // NodeList'i foreach ile dolaşabiliriz.


console.log(element);

