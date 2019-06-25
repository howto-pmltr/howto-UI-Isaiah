// DOM Selectors
const mainContent = document.querySelector(".mainContent");
const footer = document.querySelector(".footer");
const menu = document.querySelector("#menu");
const menuItems = document.querySelector(".menuItems");
const mainCreate = document.querySelector(".mainCreate");
const mainFind = document.querySelector(".mainFind");
const mainShare = document.querySelector(".mainShare");
const mainRate = document.querySelector(".mainRate");
const homeHeader = document.querySelector(".homeHeader");
const cSeeMore = document.querySelector("#cSeeMore");
const fSeeMore = document.querySelector("#fSeeMore");
const sSeeMore = document.querySelector("#sSeeMore");
const rSeeMore = document.querySelector("#rSeeMore");

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

sSeeMore.addEventListener("click", function () {
    mainRate.style.display = "grid";
    footer.style.display = "flex";
    mainRate.scrollIntoView({
        behavior: "smooth"
    });
});

rSeeMore.addEventListener("click", function () {
    footer.style.display = "flex";
    homeHeader.scrollIntoView({
        behavior: "smooth"
    });
});
