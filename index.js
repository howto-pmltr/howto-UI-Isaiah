// DOM Selectors
const mainContent = document.querySelector("#mainContent");
const footer = document.querySelector(".footer");
const menu = document.querySelector("#menu");
const aboutMenu = document.querySelector(".aboutMenu");
const menuItems = document.querySelector(".menuItems");
const menuLinks = document.querySelectorAll(".menuItems a");
const mainCreate = document.querySelector(".mainCreate");
const mainFind = document.querySelector(".mainFind");
const mainShare = document.querySelector(".mainShare");
const mainRate = document.querySelector(".mainRate");
const homeHeader = document.querySelector(".homeHeader");

//When Learn More button is pressed, main-content is revealed and the page is scrolled to the content.
learnMore.addEventListener("click", function () {
    mainContent.style.display = "block";
    footer.style.display = "flex";
    mainContent.scrollIntoView({
        behavior: "smooth"
    });
});

menu.addEventListener('click', function () {
    menuItems.classList.toggle('toggleMenu');
})