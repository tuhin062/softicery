document.querySelectorAll('.nav-512834 a').forEach(link => {
    link.addEventListener('click', function (event) {
        setTimeout(() => {
            gsap.delayedCall(0.3, () => ScrollTrigger.refresh()); 
        }, 500);
    });
});



