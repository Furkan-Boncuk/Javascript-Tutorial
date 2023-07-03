// Ajax, callback, http requests

class Request{

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // GET Request

    // get(url) {

    //     console.log(this); // Request {xhr: XMLHttpRequest}   => Burada this, Request objesini gösterir

    //     this.xhr.open("GET",url); // bağlantı açıldı

    //     this.xhr.onload = function() {

    //         console.log(this); // XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}    => Burada this, XMLHttpRequest objesini gösterir

    //         if(this.status == 200) {

    //             console.log(this.responseText);

    //         }

    //     }

    //     this.xhr.send();

    // }



    // get(url) {

    //     console.log(this); // Request {xhr: XMLHttpRequest}   => Burada this, Request objesini gösterir

    //     this.xhr.open("GET",url); // bağlantı açıldı

    //     this.xhr.onload = function() {

    //         console.log(this); // Request {xhr: XMLHttpRequest}   => Artık this, Request objesini gösterir
            
    //         // this ifadesini buna göre kullanmalıyız.

    //         if(this.xhr.status == 200) {

    //             console.log(this.xhr.responseText);

    //         }

    //     }.bind(this); // this ifadesini Request objesini gösterir şekilde fonksiyona verir.

    //     this.xhr.send();

    // }



    // fonksiyonu Arrow Function olarak yazarsak kendiliğinden .bind(this) işlemi yapılacaktır.
    
    // get(url) {

    //     console.log(this); // Request {xhr: XMLHttpRequest}   => Burada this, Request objesini gösterir

    //     this.xhr.open("GET",url); // bağlantı açıldı

    //     this.xhr.onload = () => {

    //         console.log(this); // Request {xhr: XMLHttpRequest}   => Artık this, Request objesini gösterir
            
    //         // this ifadesini buna göre kullanmalıyız.

    //         if(this.xhr.status == 200) {

    //             console.log(this.xhr.responseText);

    //         }

    //     };

    //     this.xhr.send();

    // }
    

    // callback yazalım : 

    get(url, callback) {

        console.log(this); // Request {xhr: XMLHttpRequest}   => Burada this, Request objesini gösterir

        this.xhr.open("GET",url); // bağlantı açıldı

        this.xhr.onload = () => {

            console.log(this); // Request {xhr: XMLHttpRequest}   => Artık this, Request objesini gösterir
            
            // this ifadesini buna göre kullanmalıyız.

            if(this.xhr.status == 200) {

                callback(null, this.xhr.responseText); // isteğimiz bitti.

            } else {

                callback("Get Request : Bir hata oluştu.",null);

            }

        };

        this.xhr.send();

    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums", function(error,response) {

    if(error === null) {
        // hata yok
        console.log(response);
    } else {
        // hata var
        console.log(error);
    }
    
});

// id'si 56 olanı getirir.

request.get("https://jsonplaceholder.typicode.com/albums/56", function(error,response) {

    if(error === null) {
        // hata yok
        console.log(response);
    } else {
        // hata var
        console.log(error);
    }
    
});
