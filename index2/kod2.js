// google
document.getElementById("googleButton").addEventListener("click", function () {
    var google = "https://www.google.com/search?q=" + document.getElementById("value").value;
    location.href = google;
});
// seznam
document.getElementById("seznamButton").addEventListener("click", function () {
    var seznam = "https://search.seznam.cz/?q=" + document.getElementById("value").value;
    location.href = seznam;
});
// cz.nic
document.getElementById("nicButton").addEventListener("click", function () {
    var nic = "https://www.nic.cz/whois/domain/" + document.getElementById("value").value;
    location.href = nic;
});
// TinyURL
document.getElementById("urlButton").addEventListener("click", function () {
    var url = "https://tinyurl.com/create.php?source=&url=" + document.getElementById("value").value;
    location.href = url;
});
// js
document.getElementById("jsButton").addEventListener("click", function () {
    document.getElementById("script").innerHTML = eval('function script(){'+document.getElementById("value").value+'}');
    script();
});