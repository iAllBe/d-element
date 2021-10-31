//modal form lets talk
let modal = document.getElementById("talk-form");
let btn = document.getElementsByClassName("lets-talk-form")[0];

btn.onclick = function () {
    modal.style.display = "block";
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("lock");
}

let closeForm = document.getElementsByClassName("close-form")[0];
closeForm.onclick = function () {
    modal.style.display = "none";
}
