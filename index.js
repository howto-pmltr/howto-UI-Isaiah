// DOM Selectors
const mainContent = document.querySelector(".mainContent");
const footer = document.querySelector(".footer");
const menu = document.querySelector("#menu");
const menuItems = document.querySelector(".menuItems");
const mainCreate = document.querySelector(".mainCreate");
const mainFind = document.querySelector(".mainFind");
const mainShare = document.querySelector(".mainShare");
const cSeeMore = document.querySelector("#cSeeMore");
const fSeeMore = document.querySelector("#fSeeMore");
const sSeeMore = document.querySelector("#fSeeMore");

//When Learn More button is pressed, main-content is revealed and the page is scrolled to the content.
learnMore.addEventListener("click", function () {
    mainContent.style.display = "flex";
    footer.style.display = "flex";
    mainContent.scrollIntoView({
        behavior: "smooth"
    });
});

menu.addEventListener('click', function () {
    menuItems.classList.toggle('toggleMenu');
})

// Change Content
cSeeMore.addEventListener("click", function () {
    mainFind.style.display = "grid";
    footer.style.display = "flex";
    mainFind.scrollIntoView({
        behavior: "smooth"
    });
});

fSeeMore.addEventListener("click", function () {
    mainShare.style.display = "grid";
    footer.style.display = "flex";
    mainShare.scrollIntoView({
        behavior: "smooth"
    });
});
