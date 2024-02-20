const menu = document.querySelector(".menu"),
    menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
})