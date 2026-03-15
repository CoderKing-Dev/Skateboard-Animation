const circle = document.getElementById('circleTrigger');
const skaterImg = document.querySelector('.skater-man');
const wheel = document.querySelector('.wheel-icon-3d');

let isAnimating = false;

wheel.onclick = function(event) {
    event.stopPropagation();

    if (isAnimating) return;
    
    isAnimating = true; 
    wheel.style.pointerEvents = "none"; 
    circle.style.pointerEvents = "none"; 

    let tl = gsap.timeline({
        onComplete: () => {
            isAnimating = false; 
            wheel.style.pointerEvents = "auto"; 
            circle.style.pointerEvents = "auto"; 
       gsap.set(".skater-man", { x: "-250%", y: 0, opacity: 0, rotation: 0 }); 
    gsap.set(".word", { opacity: 0, scale: 0.5 }); 
        }
    });


    tl.to(".left", { x: -800, opacity: 0, duration: 1.2, ease: "power3.inOut" });
    tl.to(".right", { x: 800, opacity: 0, duration: 1.2, ease: "power3.inOut" }, "-=1.2");
    tl.to(".spinning-board", { opacity: 0, scale: 0, duration: 0.5 }, "-=1");

    tl.to("#skaterScene", { opacity: 1, duration: 0.1 });

    tl.fromTo(".skater-man", 
        { x: "-250%", y: 0, opacity: 0 }, 
        { 
            x: "-10%", 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power2.out",
            onStart: () => { skaterImg.src = 'image/skeatboard_man2.png'; } 
        }
    );

    tl.to(".skater-man", { 
        y: -250, 
        rotation: 360, 
        duration: 0.7, 
        ease: "power2.out",
        onStart: () => { skaterImg.src = 'image/skeatboard_man.png'; }
    });

    tl.to(".skater-man", { 
        y: 0, 
        x: "-10%",
        duration: 0.5, 
        ease: "bounce.out" 
    });

    
    tl.to(".word", { 
        opacity: 1, 
        scale: 1, 
        stagger: 0.2, 
        duration: 0.5, 
        ease: "back.out" 
    }, "-=0.2");

    tl.to({}, { duration: 2 }); 
    
    tl.to("#skaterScene", { opacity: 0, duration: 0.8 }); 
    tl.to(".left", { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
    tl.to(".right", { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=1");
    tl.to(".spinning-board", { opacity: 1, scale: 1, duration: 0.5 });
};
