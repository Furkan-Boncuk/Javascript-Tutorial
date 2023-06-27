const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",load); // sayfa yeniden yüklendiğinde kullanılır

function load(event) {
    console.log("Sayfa Yüklendi.");
}


// Input Eventleri

    // focus ve blur eventleri
filter.addEventListener("focus",focus_run); // form'a tıkladığımızda
filter.addEventListener("blur",focus_run); // form'dan çıktığımızda

function focus_run(event) {
    console.log(event.type);
}

    // paste eventi
filter.addEventListener("paste",paste_run); // form'a bir yazıyı yapıştırdığımızda

function paste_run(event) {
    console.log(event.type);
}

    // copy eventi
filter.addEventListener("copy",copy_run); // form'daki bir yazıyı kopyaladığımızda

function copy_run(event) {
    console.log(event.type);
}

    // cut eventi
filter.addEventListener("cut",cut_run); // form'daki bir yazıyı kestiğimizde

function cut_run(event) {
    console.log(event.type);
}

    // select eventi 
filter.addEventListener("select",select_run); // form'daki yazının bir kısmını veya hepsini seçtiğimizde 
function select_run(event) {     
    console.log(event.type); 
}

