// While Döngüleri

let i = 10;

while(i>0) {
    console.log(i);
    i--;
}

// break ve continue

let a = 0;

while(a<10) {
    console.log(a);
    if(a == 5) {
        break;
    }
    a++;
}

let b = 0;

while(b<10) {

    if(b == 3 || b == 5) {
        b++;
        continue;
    }
    console.log(b);
    b++;
}

// Do While Döngüleri

let c= 0; 

do {
    console.log(c);
    c++;
}while(c<10);


// iterasyon işlemi - For Döngüleri

const langs = ["Java","C#","Javascript"];

let index = 0;

while(index < langs.length) {
    console.log(langs[index]);
    index++;
}

for(let ind = 0; ind < langs.length; ind++) {
    console.log(langs[ind]);
}

// foreach
langs.forEach(function(lang){
    console.log(lang,index);
});


// map
const users = [
    {name:"Furkan",age:19},
    {name:"User2",age:30},
    {name:"User3",age:24}
];

const names = users.map(function(user){ 
    return user.name;
});

console.log(names);

const ages = users.map(function(user){
    return user.age;
});

console.log(ages);

// for in
const user = {
    name:"Furkan",
    age:19
};

for(let key in user) {
    console.log(key,user[key]);
}
