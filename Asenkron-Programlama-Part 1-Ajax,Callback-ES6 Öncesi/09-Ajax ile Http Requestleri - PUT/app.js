class Request{

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // PUT Request
    put(url, data, callback) {

        this.xhr.open("PUT",url); // bağlantı açtık

        this.xhr.setRequestHeader("Content-type","application/json"); // JSON verisi göndereceğimizi belirtiyoruz. (Content-type = form verisi veya json olabilir.)

        this.xhr.onload = () => {

            if(this.xhr.status == 200) { 
                // hata yoksa
                callback(null, this.xhr.responseText);

            } else {
                // hata varsa
                callback("PUT Request : Bir hata oluştu", null);
            }

        }

        this.xhr.send(JSON.stringify(data)); // String' e çevirip gönderdik.

    }


}

const request = new Request();

request.put("https://jsonplaceholder.typicode.com/posts/10", {userId:143,title:"Albüm Adı"}, function(error,response) {

    if(error === null) {
        // hata yok
        console.log(response);

    } else {
        // hata var
        console.log(error);
    }

});

