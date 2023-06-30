const person = {
    name:"Furkan Boncuk",
    age:19,
    salary:15000
}

const langs = ["Python","Java","C++","PHP"];

const name = "Furkan";

// for in -> property'leri getirdi -> name,age,salary
for(let prop in person) {
    console.log(prop);
}

// Furkan Boncuk,19,15000
for(let prop in person) {
    console.log(person[prop]);
}

// 0,1,2,3
for(let index in langs) {
    console.log(index);
}

// Python,Java,C++,PHP
for(let index in langs) {
    console.log(langs[index]);
}

// 0,1,2,3,4,5,6
for(let index in name) {
    console.log(index);
}

// F,u,r,k,a,n
for(let index in name) {
    console.log(name[index]);
}



// For Of döngüsü : 

// Python,Java,C++,PHP
for(let value of langs) { // array'lerin üzerinde değerleri direkt almak için For Of kullanırız
    console.log(value);
}

// F,u,r,k,a,n
for(let character of name) {
    console.log(character);
}

