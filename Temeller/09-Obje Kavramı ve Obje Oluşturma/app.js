let value;

const programmer = {
    name : "Furkan Boncuk",
    age : 19,
    email : "furkanboncuk2000@gmail.com",
    langs : ["Java","Javascript"],

    address : {
        city : "İstanbul",
        street : "Kartal"
    },

    work : function() {
        console.log("Programcı çalışıyor...");
    }
}

value = programmer;

value = programmer.email;
//value = programmer["email"];

value = programmer.address.city;

programmer.work();

const programmers = [
    {name:"Furkan Boncuk",age:19},
    {name:"programmer2",age:30}
];

value = programmers[1];



console.log(value);
