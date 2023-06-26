//alert

alert("Uyarı Mesajı");

//confirm

const cevap = confirm("Silmek istediğinize emin misiniz?"); // tamam a basıldı

console.log(cevap); // true

if(cevap) {
    console.log("Silindi.");
} 
else {
    console.log("Silme işlemi geri alındı.");
}

const answer = prompt("2 + 2 = ?");

if(answer == 4) {
    console.log("Başarılı");
}
else {
    console.log("Başarısız");
}

//location

let value;

value = window;
value = window.location;
value = window.location.host; 
value = window.location.hostname; 
value = window.location.port;
value = window.location.href; 

console.log(value);

if(confirm("Sayfa yenilensin mi ?")) {
    window.location.reload();
} 
else {
    console.log("Sayfayı yenilemediniz.");
}

let val = window.outerHeight;
val = window.outerWidth;

val = window.innerWidth;
val = window.innerHeight;

val = window.scrollX;

val = window.scrollY;

console.log(val);
