// google
document.getElementById("googleButton").addEventListener("click", function () {
    var google = "https://www.google.com/search?q=" + document.getElementById("google").value;
    location.href = google;
});
document.getElementById("google").addEventListener("keydown", function (e) {
    var google = "https://www.google.com/search?q=" + document.getElementById("google").value;
    if (e.keyCode == 13) {
        e.preventDefault();
        location.href = google;
    }
});
// seznam
document.getElementById("seznamButton").addEventListener("click", function () {
    var seznam = "https://search.seznam.cz/?q=" + document.getElementById("seznam").value;
    location.href = seznam;
});
document.getElementById("seznam").addEventListener("keydown", function (e) {
    var seznam = "https://search.seznam.cz/?q=" + document.getElementById("seznam").value;
    if (e.keyCode == 13) {
        e.preventDefault();
        location.href = seznam;
    }
});
// cz.nic
document.getElementById("nicButton").addEventListener("click", function () {
    var nic = "https://www.nic.cz/whois/domain/" + document.getElementById("nic").value;
    location.href = nic;
});
document.getElementById("nic").addEventListener("keydown", function (e) {
    var nic = "https://www.nic.cz/whois/domain/" + document.getElementById("nic").value;
    if (e.keyCode == 13) {
        e.preventDefault();
        location.href = nic;
    }
});
// TinyURL
document.getElementById("urlButton").addEventListener("click", function () {
    var url = "https://tinyurl.com/create.php?source=&url=" + document.getElementById("url").value;
    location.href = url;
});
document.getElementById("url").addEventListener("keydown", function (e) {
    var url = "https://tinyurl.com/create.php?source=&url=" + document.getElementById("url").value;
    if (e.keyCode == 13) {
        e.preventDefault();
        location.href = url;
    }
});
// js
document.getElementById("jsButton").addEventListener("click", function () {
    document.getElementById("script").innerHTML = eval('function script(){' + document.getElementById("js").value + '}');
    script();
});
document.getElementById("js").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        document.getElementById("script").innerHTML = eval('function script(){' + document.getElementById("js").value + '}');
        script();
    }
});