document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-512834 ul li a, .mobile-nav ul li a");

    const observerOptions = {
        root: null,
        rootMargin: "-50px 0px -50% 0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-512834 ul li a[href="#${activeId}"], .mobile-nav ul li a[href="#${activeId}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.getElementById("mobile-nav").classList.remove("open");
        });
    });
});
