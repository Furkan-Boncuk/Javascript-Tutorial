// fonksiyon tanımlama

function merhaba(name="Bilgi Yok", age="Bilgi Yok") {

    console.log(`Merhaba, ${name}(${age})`);
}

merhaba("Furkan Boncuk",19); // function call
//Merhaba, Furkan Boncuk(19)

merhaba();
//Merhaba, Bilgi Yok(Bilgi Yok)

// return fonksiyonlara neden ihtiyaç var ?

function square(x) {
    console.log(x*x);
}

function cube(x) {
    console.log(x*x*x);
}

let a = square(12); // 144

a = cube(a); //NaN (Not a Number)
// square() fonksiyonu return bir fonksiyon olmadığı için değer döndürmüyor.
// bu yüzden bu fonksiyondan çıkacak değeri başka bir yerde kullanamıyoruz. 

function square_return_method(x) {
    return x*x;
}

function cube_method(x) {
    console.log(x*x*x);
}

let b = square_return_method(2); 
b = cube_method(b); // 64


const greeting = function(name) {
    return `Merhaba, ${name}`;
}

console.log(greeting("Furkan Boncuk"));

// Immediately Invoked Function Expression (IIFE)
    //tanımlandığı yerde direkt çalışan fonksiyon

(function(surname){
    console.log("Merhaba "+ surname);
})("Furkan");

const database = {

    host:"localhost",

    add: function() {
        console.log("Eklendi.");
    },

    get: function() {
        console.log("Getirildi");
    },

    update: function(id) {
        if(id != undefined) {
            console.log(`Id : ${id} Güncellendi`);
        } else {
            console.log("Hata : Bulunamadı");
        }
    },

    delete: function(id) {
        if(id != undefined) {
            console.log(`Id : ${id} Silindi`);
        } else {
            console.log("Hata : Bulunamadı");
        }
    }

}

console.log(database.host);
database.add();
database.update();
database.delete(12);
