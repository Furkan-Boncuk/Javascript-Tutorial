class Request{

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // DELETE Request
    delete(url, callback) {

        this.xhr.open("DELETE",url); // bağlantı açtık

        this.xhr.onload = () => {

            if(this.xhr.status === 200) { 
                // hata yoksa
                callback(null, "Veri silindi.");

            } else {
                // hata varsa
                callback("DELETE Request : Bir hata oluştu", null);
            }

        }

        this.xhr.send();
    }


}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(error,response) {

    if(error === null) {
        // hata yok
        console.log(response);

    } else {
        // hata var
        console.log(error);
    }

});

