// DOM Selectors
const mainContent = document.querySelector(".mainContent");
const footer = document.querySelector(".footer");
const menu = document.querySelector("#menu");
const menuItems = document.querySelector(".menuItems");


//When Learn More button is pressed, main-content is revealed and the page is scrolled to the content.
learnMore.addEventListener("click", function() {
  mainContent.style.display = "flex";
  footer.style.display = "flex";
  mainContent.scrollIntoView({
    behavior: "smooth"
  });
});

menu.addEventListener('click', function() {
    menuItems.classList.toggle('toggleMenu');
})