document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const body = document.body;
    const closeBtn = document.getElementById("close-btn");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav .list-374612 li a");

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", () => {
            mobileNav.classList.toggle("active");
            body.classList.toggle("no-scroll");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            body.classList.remove("no-scroll");
        });
    }

    document.addEventListener("click", (event) => {
        if (!mobileNav.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            mobileNav.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });

    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            body.classList.remove("no-scroll");
        });
    });
});
