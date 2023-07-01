function UI() {
    
}
// arayüzü UI constructor'ı üzerinden uygulayacağız
// metodlarımızı buradan yerleştireceğiz

UI.prototype.addFilmToUI = function(newFilm) {

//     <!-- <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr> -->

    const filmList = document.getElementById("films");

    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
       <td>${newFilm.title}</td>
       <td>${newFilm.director}</td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr> `;   // += koymamızın sebebi önceki elementin üzerine eklememiz. Önceki elementin silinmemesi için üzerine ekliyoruz

}

UI.prototype.clearInputs = function(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function(message,type) {

    const firstCardBody = document.querySelectorAll(".card-body")[0];
    
    const div = document.createElement("div");

    div.className = `border text-center alert alert-${type}`; // alert-primary, alert-danger, alert-warning vb.
    div.textContent = message;
    div.style.marginRight = "100px";
    div.style.marginLeft = "100px"

    firstCardBody.appendChild(div);

    setTimeout(function() {
        div.remove();
    },1500);  // 1.5 saniye geçtikten sonra div ekrandan silinecek

}

UI.prototype.loadAllFilms = function(films) {

    const filmList = document.getElementById("films");

    films.forEach(function(film) {
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
           <td>${film.title}</td>
           <td>${film.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
         </tr> `;
    });

}

UI.prototype.deleteFilmFromUI = function(element) {

    element.parentElement.parentElement.remove();

}

UI.prototype.clearAllFilmsFromUI = function() {

    const filmList = document.getElementById("films");

    while(filmList.firstElementChild != null) { // child element olduğu sürece
        filmList.firstElementChild.remove();
    }

}
