document.addEventListener("DOMContentLoaded", function () {
    let angle = 0;
    let svgAngle = 0;

    function animateElements() {
        angle += 0.015;
        svgAngle += 0.008;

        let img1 = document.querySelector(".img-267845");
        let img2 = document.querySelector(".img-745129");

        if (img1) img1.style.transform = `translateY(${Math.sin(angle) * 15}px) rotate(-7deg)`;
        if (img2) img2.style.transform = `translateY(${Math.cos(angle) * 15}px) rotate(10deg)`;

        document.querySelectorAll(".floating-svg").forEach((svg, index) => {
            let floatX = Math.sin(svgAngle + index) * (8 + index * 2);
            let floatY = Math.cos(svgAngle + index * 1.5) * (10 + index * 2);
            let rotation = Math.sin(svgAngle * (index + 1) * 0.4) * 5;
            svg.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${rotation}deg)`;
        });

        requestAnimationFrame(animateElements);
    }

    animateElements();

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        document.querySelectorAll(".floating-svg").forEach((svg, index) => {
            let direction = index % 2 === 0 ? 1 : -1;
            let scrollOffset = scrollY * 0.015 * direction;
            svg.style.transform = `translate(${scrollOffset}px, ${Math.sin(svgAngle) * 15 * direction}px) rotate(${Math.cos(svgAngle) * 8}deg)`;
        });
    });
});
