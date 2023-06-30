let number1,number2;

arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

console.log(number1,number2);

// Destructing 

//[number1,number2] = arr; 

const [number3,number4] = arr; // number3 -> 0.index' e ve number4 -> 1.index' e eşitleniyor

console.log(number3,number4);

// Object Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}

const {a:number5,c:number6,e:number7} = numbers; // number5 -> a'nın değeri, number6 -> c'nin değeri, number7 -> e'nin değeri

console.log(number5,number6,number7);

// Function Destructing

const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();

console.log(lang1,lang2,lang3);

// Object

const person = {
    name : "Furkan Boncuk",
    year : 2021,
    salary : 14500,
    showInfos : () => console.log("Bilgiler Gösteriliyor...")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

bilgileriGoster();
console.log(isim,yil,maas);
