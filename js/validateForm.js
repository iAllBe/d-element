//form validate
function validate() {
    let a = document.forms["talk-form"]["fullname"].value;
    if (a == "") {
        alert("Укажите ваше имя");
        return false;
    }

    let с = document.forms["talk-form"]["email"].value;
    if (с == "") {
        alert("Укажите ваш Е-майл");
        return false;
    }

    let b = document.forms["talk-form"]["message"].value;
    if (b == "") {
        alert("Заполните текст сообщения");
        return false;
    }

    if (window.location.search.replace('?', '')) {
        alert("Your message successfully sent");
    }
}