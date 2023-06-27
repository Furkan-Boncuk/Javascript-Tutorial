const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

console.log(cardBody);

// Click Eventi

title.addEventListener("click",run);

function run(event) {
    console.log(event.type);
}

// Double Click Eventi (dblclick)

title.addEventListener("dblclick",dblclick_run);

function dblclick_run(event) {
    console.log(event.type);
}

// Mouse Down Eventi -> Bastığımız ve basılı tuttuğumuz zaman aktif olur (click eventinden pek farkı yok)

title.addEventListener("mousedown",mousedown_run);

function mousedown_run(event) {
    console.log(event.type);
}

// Mouse Up Eventi -> basıp bıraktığımızda devreye giren event

title.addEventListener("mouseup",mouseup_run);

function mouseup_run(event) {
    console.log(event.type);
}

// Mouse Over -> mouse ile üzerine geldiğimizde aktif olan event

title.addEventListener("mouseover",mouseover_run);

function mouseover_run(event) {
    console.log(event.type);
}

// Mouse Out -> elementten çıktığımız zaman aktifleşen event (mouse'u elementin üzerinden çektiğimizde)

title.addEventListener("mouseout",mouseout_run);

function mouseout_run(event) {
    console.log(event.type);
}

// Mouse Enter ve Mouse Leave

cardBody.addEventListener("mouseenter",mouseenter_ve_leave);
cardBody.addEventListener("mouseleave",mouseenter_ve_leave);
// cardBody' ye girip çıktığımızda mouseenter girişlerimizde, mouseleave elementten çıkışlarımızda aktifleşecek
function mouseenter_ve_leave(event) {
    console.log(event.type);
}  


