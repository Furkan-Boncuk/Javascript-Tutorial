// Karşılaştırma Operatörleri 

/*
    ==
    ===
    !=
    !==
    >
    <
    >=
    <=
*/


console.log(2==2);

console.log(2=="2"); // true
console.log(2==="2"); // false  (String, number)

// ===    değer ve tip kontrolü yapar.

console.log(2<4);

console.log(3!=5);

console.log(5>=5);

console.log(5!="5"); // false
console.log(5!=="5"); //true

// and operator &&
console.log( (2!=2) && ("Ahmet"=="Ahmet") );
// or operator||
console.log( (4==2) || ("Ahmet"=="Ahmet") );

const value = false;

if(value == true) {
    console.log("If bloğu çalıştı");
}else {
    console.log("Else bloğu çalıştı");
}

const user = "furkan boncuk";

if(user === "furkan boncuk") {
    console.log("kullanıcı bulundu.")
} else {
    console.log("kulllanıcı bulunamadı.");
}

const process = "-1";

if(process === "1") {
    console.log("İşlem 1");

} 
else if(process === "2") {
    console.log("İşlem 2");

} 
else if(process === "3") {
    console.log("İşlem 3");

} 
else {
    console.log("Geçersiz İşlem");
}

// Ternary Operator
const number = 10;

console.log(number === 100 ? "Sayı 100'e eşit":"Sayı 100'e eşit değil");
