// içerisine fonksiyon alabilen ifadeler : 

const langs = ["Java","Javascript","C++"];

langs.forEach(function(lang) {
    console.log(lang);
});

document.getElementById("btn").addEventListener("click",function() {
    console.log("Butona basıldı");
});

// Asenkron : 

// function process1() {
//     setTimeout(function() {
//         console.log("Process 1");
//     },3000);
// }

// function process2() {
//     setTimeout(function() {
//         console.log("Process 2");
//     },2000);
// }
// process1();
// process2();
// console.log("Process 3");

// callback : 

function process1(callback) {
    setTimeout(function() {
        console.log("Process 1");
        callback();
    },3000);
}

function process2() {
    setTimeout(function() {
        console.log("Process 2");
    },2000);
}
process1(process2);
console.log("Process 3");



// Asenkron : 
    // eklenmesi istenilen elemanı listeye 3 sn. sonra ekliyor ve listeyi 1 sn. sonra yazdırıyor
    // yani önce listeyi yazdırıp sonra elemanı ekliyor
    // bu asenkron durum şu şekilde :

// const frameworks = ["Spring Boot","React","Angular","Django"];

// function addFramework(framework) {

//     setTimeout(function() {
//         frameworks.push(framework);
//         console.log("Framework listesine '"+framework+"' eklendi");
//     },3000);

// }

// function getAllFrameworks() {

//     setTimeout(function() {
//         frameworks.forEach(function(framework,index) {
//             console.log((index+1)+"- "+framework);
//         });
//     },1000);

// }

// addFramework("Flask");
// getAllFrameworks();

/*
output : 

1- Spring Boot
2- React
3- Angular
4- Django
Framework listesine 'Flask' eklendi

*/



// Callback : 

const frameworks = ["Spring Boot","React","Angular","Django"];

function addFramework(framework, callback) {

    setTimeout(function() {
        frameworks.push(framework);
        console.log("Framework listesine '"+framework+"' eklendi");
        callback();
    },3000);

}

function getAllFrameworks() {

    setTimeout(function() {
        frameworks.forEach(function(framework,index) {
            console.log((index+1)+"- "+framework);
        });
    },1000);

}

addFramework("Flask",getAllFrameworks);

/*
output : 

Framework listesine 'Flask' eklendi
1- Spring Boot
2- React
3- Angular
4- Django
5- Flask

*/
