document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled"); // Add class when scrolled
        } else {
            nav.classList.remove("scrolled"); // Remove class when at top
        }
    });
});
