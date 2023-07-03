class Request{

    constructor() {
        this.xhr = new XMLHttpRequest();
    }


    // POST Request
    post(url, data, callback) {

        this.xhr.open("POST",url); // bağlantı açtık

        this.xhr.setRequestHeader("Content-type","application/json"); // JSON verisi göndereceğimizi belirtiyoruz. (Content-type = form verisi veya json olabilir.)

        this.xhr.onload = () => {

            if(this.xhr.status == 201) { // POST request'lerinde (HTTP status code : 201 : Created kullanılır)
                // hata yoksa
                callback(null, this.xhr.responseText);

            } else {
                // hata varsa
                callback("POST Request : Bir hata oluştu", null);
            }

        }

        this.xhr.send(JSON.stringify(data)); // String' e çevirip gönderdik.

    }


}

const request = new Request();

request.post("https://jsonplaceholder.typicode.com/albums", {userId:2,title:"Thriller"}, function(error,response) {

    if(error === null) {
        // hata yok
        console.log(response);

    } else {
        // hata var
        console.log(error);
    }

});

