const merhaba = function() {
    console.log("merhaba");
}
merhaba();

// Arrow Function

const merhaba2 = () => {
    console.log("Merhaba");
}
merhaba2();

const merhaba3 = (firstname) => {
    console.log("Merhaba",firstname);
}
merhaba3("Furkan");

const merhaba4 = firstname => {
    console.log("Merhaba,",firstname,"!");
}
merhaba4("Furkan");
// fonksiyon tek bir parametre varsa bu şekilde oluşturulabilir.

const merhaba5 = firstname => console.log("Merhaba,",firstname,":)");
merhaba5("Furkan");
// fonksiyon tek bir işi yapacaksa bu şekilde oluşturulabilir

const merhaba6 = (firstname,lastname) => console.log("Merhaba,",firstname,lastname);
merhaba6("Furkan","Boncuk");

//-----------------------------------------------

const cube = function(x) {
    return x*x*x;
}
console.log(cube(4));

const cube2 = x => {
    return x*x*x;
}
console.log(cube(3));

const cube3 = x => x*x*x;
console.log(cube3(2));
