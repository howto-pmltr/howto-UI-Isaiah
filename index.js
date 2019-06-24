// DOM Selectors
//const learnMore = document.querySelector("#learnMore");
const mainContent = document.querySelector(".mainContent");
const footer = document.querySelector(".footer");













//When Learn More button is pressed, main-content is revealed and the page is scrolled to the content.
learnMore.addEventListener("click", function() {
  mainContent.style.display = "flex";
  footer.style.display = "flex";
  mainContent.scrollIntoView({
    behavior: "smooth"
  });
});