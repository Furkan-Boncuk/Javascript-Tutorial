const button = document.getElementById("change");
button.addEventListener("click",change);

function change() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangerate.host/latest",true);

    xhr.onload = function() {

        if(this.status == 200) {

            const response = JSON.parse(this.responseText)

            const rate = response.rates.TRY;

            const amount = Number(document.getElementById("amount").value);
            //console.log(typeof document.getElementById("amount").value); // => String

            document.getElementById("tl").value = amount * rate;

        }

    }

    xhr.send();

}
