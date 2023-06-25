let value;

const firstName = "Furkan";
const lastName = "Boncuk";

const langs = "Java,Javascript,C,Python";

value = firstName + " " +  lastName;

value = value + " -> " + langs;

value += " (Kullanılan Programlama Dilleri)";

value = firstName.length;

value = firstName.concat(" ",lastName," ","Javascript Tutorial");
// Furkan Boncuk Javascript Tutorial

value = value.toLowerCase();
// furkan boncuk javascript tutorial

value = value.toLocaleUpperCase();
// FURKAN BONCUK JAVASCRIPT TUTORIAL

value = firstName[0]; // F
value = firstName[1]; // u 
value = firstName[2]; // r

value = firstName[firstName.length-1]; // n -> son karakteri getirir

// indexOf

value = firstName.indexOf("k"); // 3
value = firstName.indexOf("a"); // 4
value = firstName.indexOf("ğ"); // -1 -> aranan karakter yoksa -1 döner

// charAt

value = firstName.charAt(0); // F
value = firstName.charAt(firstName.length-1); // n

// split

value = langs.split(","); // verilen karaktere göre parçalama işlemi yapar sonuçları listeler
// ['Java', 'Javascript', 'C', 'Python']

// replace

value = langs.replace("C","C#");
// Java,Javascript,C#,Python

// includes

value = langs.includes("Java"); // true (Java içinde var mı ?)
value = langs.includes("CSS"); // false 


console.log(value);
