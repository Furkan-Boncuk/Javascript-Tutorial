// status of XMLHttpRequest
// 0 : istek yok
// 1 : server bağlantısı sağlandı
// 2 : istek alındı
// 3 : istek işleniyor
// 4 : istek bitti ve yanıt hazır

const button = document.getElementById("btn");
button.addEventListener("click",function() {

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.onprogress = function() {
        console.log("Process işleniyor (readyState = "+this.readyState+")");
    }
    

    xhr.onload = function() {
        
        if(this.status === 200) {
            
            console.log(this.responseText); // example.txt dosyasındaki içeriği konsola yazdıracaktır.
            
            document.getElementById("ajax").textContent = this.responseText; // example.txt dosyasındaki içeriği div'imize yazdıracaktır.

        }

    }

    // Eski bir yöntemdir : 
    //
    // xhr.onreadystatechange = function() {
    //     if(this.status == 200 && this.readyState == 4) {
    //         console.log(this.responseText);
    //     }
    //     console.log(this.readyState);
    // }


    xhr.open("GET","example.txt",true); 
    // open() fonksiyonu bağlantı açmak için kullanılır.
    // example.txt işlemin yapılacağı dosyamızdır
    // true özelliği, asenkron olup olmadığını belirtmek içindir. Asenkron -> true / Asenkron değil -> false

    xhr.send();

});
