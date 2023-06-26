let value = document;

value = document.all;
value = document.all.length;

value = document.all[0];
value = document.all[1];
value = document.all[2];
value = document.all[document.all.length -1];

console.log(value);

// For ile listeyi dolaş

const elements = document.all
for(let i = 0; i < document.all.length; i++) {
    console.log(document.all[i]);
}

// Foreach ile listeyi dolaş

const elements2 = Array.from(document.all); // HTML Collection

elements2.forEach(element => {
    console.log(element);
});

value = document.URL;
console.log(value);
