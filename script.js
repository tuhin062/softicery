document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // Track mouse movement
    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursor.style.opacity = "1"; // Ensure visibility when moving
    });

    // Hide cursor when leaving the webpage
    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });

    // Show cursor when returning to the webpage
    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });

    // Handle cases when the browser window loses focus
    window.addEventListener("blur", () => {
        cursor.style.opacity = "0";
    });

    // Show cursor when focus is back on the page
    window.addEventListener("focus", () => {
        cursor.style.opacity = "1";
    });

    // Ensure cursor hides properly when hovering over text inputs
    document.querySelectorAll("input, textarea, button, a").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.style.opacity = "0"; // Hide custom cursor when over interactive elements
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.opacity = "1"; // Show it back when leaving interactive elements
        });
    });
});





document.querySelectorAll('.nav-512834 a').forEach(link => {
    link.addEventListener('click', function (event) {
        setTimeout(() => {
            gsap.delayedCall(0.3, () => ScrollTrigger.refresh()); 
        }, 500);
    });
});



