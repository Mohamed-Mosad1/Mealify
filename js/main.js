"use strict";

const navLink = document.querySelectorAll(".nav-list li a");
const toggleMenu = document.querySelector(".toggle-menu");

navLink.forEach((item) => {
    item.addEventListener("click", () => {
        navLink.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
})

toggleMenu.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("open");
})

document.addEventListener("click", (e) => {
    if (!e.target.closest(".toggle-menu")) {
        document.querySelector(".nav-list").classList.remove("open");
    }
});


