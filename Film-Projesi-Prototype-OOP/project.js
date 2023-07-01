const film_form = document.getElementById("film-form");
const film_title_element = document.getElementById("title");
const film_director_element = document.getElementById("director");
const film_url_element = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");


// UI objesini başlatalım : 
const ui = new UI();

// Storage objesini başlatalım : 
const storage = new Storage();

// Tüm eventleri yükleyelim :
addEventListenerForElements();

function addEventListenerForElements() {
    film_form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function() { // sayfa yeniden yüklendiğinde
        let films = storage.getFilmsFromStorage(); // storage'dan tüm filmleri getir
        ui.loadAllFilms(films); // ve arayüze yükle.
    });
    secondCardBody.addEventListener("click",deleteFilm);
    clearButton.addEventListener("click",clearAllFilms);
}

 
function addFilm(event) {

    const title = film_title_element.value.trim();
    const director = film_director_element.value.trim();
    const url = film_url_element.value.trim();

    if(title === "" || director === "" || url === "") {

        ui.displayMessages("Lütfen tüm alanları doldurunuz...","warning");

    } else {

        // yeni bir film nesnesi oluşturalım : 
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm); // filmin arayüze eklenmesini sağlayan method

        storage.addFilmToStorage(newFilm); // filmin LocalStorage' a kaydedilmesini sağlayan method

        ui.displayMessages("Film başarıyla eklendi...","success");
    }

    ui.clearInputs(film_title_element, film_director_element, film_url_element); // form input alanındaki yazıları boşaltmak için kullandığımız metod

    event.preventDefault();

}

function deleteFilm(event) {

    if(event.target.id === "delete-film") { 

        ui.deleteFilmFromUI(event.target); // arayüzden kaldır.

        let filmTitle = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;

        storage.deleteFilmFromStorage(filmTitle);
    
        ui.displayMessages(`Film başarıyla kaldırıldı : ${filmTitle}` ,"primary");
    }

}

function clearAllFilms() {

    if(confirm("Tüm filmleri silmek istediğinize emin misiniz? ")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

}
