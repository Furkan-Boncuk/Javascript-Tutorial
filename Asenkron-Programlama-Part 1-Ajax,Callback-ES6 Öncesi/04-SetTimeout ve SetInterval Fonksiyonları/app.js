setTimeout(function() {
    console.log("Merhaba");
},2000);
// setTimeout => bir müddet geçtikten sonra içerisindeki fonksiyonu çalıştırır.
// setInterval => belli aralıklarla içerisindeki fonksiyonu çalıştırır.

let i = 0;

let value = setInterval(function() {
    console.log((i+1)+".sayı :",i);
    i++;
},1000);

const stopButton = document.getElementById("btn");

stopButton.addEventListener("click",function() {
    clearInterval(value);
    console.log("Sayma işlemi sonlandırıldı.");
});
