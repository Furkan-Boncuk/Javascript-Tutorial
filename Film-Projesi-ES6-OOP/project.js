const film_form = document.getElementById("film-form");
const film_title_element = document.getElementById("title");
const film_director_element = document.getElementById("director");
const film_url_element = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");


// tüm fonksiyonlarımızı static olarak yazdığımız için object üretmeye gerek yok

// Tüm eventleri yükleyelim :
addEventListenerForElements();

function addEventListenerForElements() {
    film_form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function() { // sayfa yeniden yüklendiğinde
        let films = Storage.getFilmsFromStorage(); // storage'dan tüm filmleri getir
        UI.loadAllFilms(films); // ve arayüze yükle.
    });
    secondCardBody.addEventListener("click",deleteFilm);
    clearButton.addEventListener("click",clearAllFilms);
}

 
function addFilm(event) {

    const title = film_title_element.value.trim();
    const director = film_director_element.value.trim();
    const url = film_url_element.value.trim();

    if(title === "" || director === "" || url === "") {

        UI.displayMessages("Lütfen tüm alanları doldurunuz...","warning");

    } else {

        // yeni bir film nesnesi oluşturalım : 
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm); // filmin arayüze eklenmesini sağlayan method

        Storage.addFilmToStorage(newFilm); // filmin LocalStorage' a kaydedilmesini sağlayan method

        UI.displayMessages("Film başarıyla eklendi...","success");
    }

    UI.clearInputs(film_title_element, film_director_element, film_url_element); // form input alanındaki yazıları boşaltmak için kullandığımız metod

    event.preventDefault();

}

function deleteFilm(event) {

    if(event.target.id === "delete-film") { 

        UI.deleteFilmFromUI(event.target); // arayüzden kaldır.

        let filmTitle = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;

        Storage.deleteFilmFromStorage(filmTitle);
    
        UI.displayMessages(`Film başarıyla kaldırıldı : ${filmTitle}` ,"primary");
    }

}

function clearAllFilms() {

    if(confirm("Tüm filmleri silmek istediğinize emin misiniz? ")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }

}
