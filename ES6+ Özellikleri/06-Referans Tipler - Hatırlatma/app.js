// primitive
let a = "Furkan";
let b = "Furkan";

if(a === b) {
    console.log("eşit");
}

// referans
let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1 === array2) { // referans tiplerde bellekteki adresler tutulduğu için eşit değildir
    console.log("eşit");
} else {
    console.log("eşit değil");
}

const person1 = {
    name:"Furkan",
    age:19
}

const person2 = {
    name:"Furkan",
    age:19
}

if(person1 === person2) {
    console.log("eşit");
} else {
    console.log("eşit değil");
}

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set([1,2,3],"Array");

console.log(cities.get([1,2,3])); // undefined -> bellekte farklı yerler tutuluyor



const fixedCities = new Map();

const key = [1,2,3]

fixedCities.set("Ankara",5);
fixedCities.set("İstanbul",15);
fixedCities.set(key,"Array");

console.log(fixedCities.get(key)); // Array


