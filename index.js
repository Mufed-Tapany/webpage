var mainElement = document.getElementById("mainElement");
var getNav = document.querySelector("nav");
var hamburgerMenu = document.getElementById("hamburgermenu");
var bodyElement = document.body;
var closeButton = document.getElementById("closeButton");
var f = document.querySelectorAll("toggle-nav");

hamburgerMenu.addEventListener("click", function () {
    getNav.classList.toggle("open");
    closeButton.style.visibility = "visible";
    closeButton.style.zIndex = "1001";
    bodyElement.classList.toggle("open");
});

closeButton.addEventListener("click", function () {
    getNav.classList.toggle("open");
    bodyElement.classList.remove("open");
    closeButton.style.visibility = "hidden";
});

mainElement.addEventListener("click", function () {
    getNav.classList.remove("open");
    bodyElement.classList.remove("open");
    closeButton.style.visibility = "hidden";
});
