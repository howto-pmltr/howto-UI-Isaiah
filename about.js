// DOM Selectors
const aboutMenu = document.querySelector(".aboutMenu");
const menuItems = document.querySelector(".menuItems2");


aboutMenu.addEventListener('click', function () {
    menuItems.classList.toggle('toggleMenu2');
    console.log("clicked")
})

