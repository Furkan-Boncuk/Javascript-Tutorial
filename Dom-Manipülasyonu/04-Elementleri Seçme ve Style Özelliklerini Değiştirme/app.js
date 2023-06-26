// "Tüm Taskları Temizleyin" butonunu değiştirelim : 
const element = document.querySelector("#clear-todos");

// element özellikleri

console.log(element.id);
console.log(element.className);
console.log(element.classList); //DOMTokenList

console.log(element.textContent); // sadece yazı olan kısımları bize verir

console.log(element.innerHTML);

console.log(element.href);

console.log(element.style);

// style ve element özelliklerini değiştirme

element.className = "btn btn-primary";
element.style.color = "#D50000";
element.style.marginLeft = "150px";
element.href = "http://www.google.com.tr";
element.target = "_blank"; // yeni sekmede link'e yönlendirir

element.textContent = "Sil";

element.innerHTML = "<span style='color: red;'>SİLİN</span>";


// Todo Listesini (div) değiştirelim : 
const elements = document.querySelectorAll(".list-group-item"); //NodeList döndürür
elements.forEach(function(elmnt){
    elmnt.style.color = "purple";
    elmnt.style.background = "#eee";
});

let element2 = document.querySelector("li:last-child"); //parent'ın altındaki son elementi seç
element2 = document.querySelector("li:nth-child(2)"); //2. child elementi seç
element2 = document.querySelector("li:nth-child(3)"); //3. child elementi seç
element2 = document.querySelector("li:nth-child(4)"); //4. child elementi seç
element2 = document.querySelectorAll("li:nth-child(odd)"); //tek sayıda olan child elementleri seç
element2 = document.querySelectorAll("li:nth-child(even)"); //çift sayıda olan child elementleri seç

console.log(element2);

element2.forEach(function(elmnt) {
    elmnt.style.color="red";
    elmnt.style.background="#ccc";
});
