const mainElement = document.getElementById("mainElement");
const getNav = document.querySelector("nav");
const hamburgerMenu = document.getElementById("hamburgermenu");
const bodyElement = document.body;
const closeButton = document.getElementById("closeButton");

hamburgerMenu.addEventListener("click", () => {
    getNav.classList.toggle("open");
    closeButton.style.visibility = "visible";
    closeButton.style.zIndex = "1001";
    bodyElement.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
    getNav.classList.toggle("open");
    bodyElement.classList.remove("open");
    closeButton.style.visibility = "hidden";
});

mainElement.addEventListener("click", () => {
    getNav.classList.remove("open");
    bodyElement.classList.remove("open");
    closeButton.style.visibility = "hidden";
});
