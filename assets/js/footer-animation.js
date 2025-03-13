document.addEventListener("DOMContentLoaded", () => {
    let footer = document.querySelector(".footer");
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let tl = gsap.timeline();

                    // Brand Box (From Left)
                    tl.from(".brand-box", { 
                        x: -100, 
                        opacity: 0, 
                        duration: 1, 
                        ease: "power3.out" 
                    });

                    // About Box (From Right)
                    tl.from(".about-box", { 
                        x: 100, 
                        opacity: 0, 
                        duration: 1, 
                        ease: "power3.out" 
                    }, "-=0.8");

                    // Contact Box (From Left)
                    tl.from(".contact-box", { 
                        x: -100, 
                        opacity: 0, 
                        duration: 1, 
                        ease: "power3.out" 
                    }, "-=0.8"); 

                    // Social Icons (Bounce Effect)
                    tl.from(".social-icon", { 
                        opacity: 0, 
                        duration: 0.6, 
                        ease: "back.out(1.7)", 
                        stagger: 0.2 
                    }, "-=0.5");

                    // Animate Bottom Footer Elements Individually
                    tl.from(".copyright", { 
                        x: -80, 
                        opacity: 0, 
                        duration: 1, 
                        ease: "power3.out" 
                    }, "-=0.8");

                    tl.from(".footer-links li", { 
                        x: 80, 
                        opacity: 0, 
                        duration: 1, 
                        ease: "power3.out", 
                        stagger: 0.2 
                    }, "-=0.8");

                    observer.unobserve(footer);
                }
            });
        }, 
        { threshold: 0.2 }
    );

    observer.observe(footer);
});
