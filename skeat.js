const circle = document.getElementById('circleTrigger');
const skaterImg = document.querySelector('.skater-man');
const wheel = document.querySelector('.wheel-icon-3d');

// Animasiyanin isleyib-islemeyini yoxlayan bayraq
let isAnimating = false;

wheel.onclick = function(event) {
    // 1. Sehifenin diger yerlerine klik hadisesinin yayilmasini dayandirir
    event.stopPropagation();

    // 2. Eger animasiya artiq isleyirse, ikinci klike icaze verme
    if (isAnimating) return;
    
    isAnimating = true; // Animasiya bashladi
    wheel.style.pointerEvents = "none"; // Tekeri klike bagla
    circle.style.pointerEvents = "none"; // Daireni muveqqeti klike bagla

    let tl = gsap.timeline({
        onComplete: () => {
            isAnimating = false; // Animasiya tam bitende
            wheel.style.pointerEvents = "auto"; // Tekeri yeniden aktiv et
            circle.style.pointerEvents = "auto"; // Daireni yeniden aktiv et
       gsap.set(".skater-man", { x: "-250%", y: 0, opacity: 0, rotation: 0 }); 
    // ^ Adami yeniden ekrani soluna, gorunmez ve duz veziyyete qoyduq.
    gsap.set(".word", { opacity: 0, scale: 0.5 }); 
    // ^ Yazilari balacalashdirib gizletdik ki, gelen defe yeniden boyuyerek gelsinler.
        }
    });

    // --- ARDICILLIQ (deyismediyimiz hisse) ---

    // 1. Daire hisseleri kenara cekilir
    tl.to(".left", { x: -800, opacity: 0, duration: 1.2, ease: "power3.inOut" });
    tl.to(".right", { x: 800, opacity: 0, duration: 1.2, ease: "power3.inOut" }, "-=1.2");
    tl.to(".spinning-board", { opacity: 0, scale: 0, duration: 0.5 }, "-=1");

    // 2. Sehne gorunur
    tl.to("#skaterScene", { opacity: 1, duration: 0.1 });

    // 3. Suren adam gelir (senin reqemlerinle)
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

    // 4. Tullanma
    tl.to(".skater-man", { 
        y: -250, 
        rotation: 360, 
        duration: 0.7, 
        ease: "power2.out",
        onStart: () => { skaterImg.src = 'image/skeatboard_man.png'; }
    });

    // 5. Enis
    tl.to(".skater-man", { 
        y: 0, 
        x: "-10%",
        duration: 0.5, 
        ease: "bounce.out" 
    });

    // 6. Yazilar
    tl.to(".word", { 
        opacity: 1, 
        scale: 1, 
        stagger: 0.2, 
        duration: 0.5, 
        ease: "back.out" 
    }, "-=0.2");

    // 7. Gozleme ve Baglanma
    tl.to({}, { duration: 2 }); 
    
    tl.to("#skaterScene", { opacity: 0, duration: 0.8 }); 
    tl.to(".left", { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
    tl.to(".right", { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=1");
    tl.to(".spinning-board", { opacity: 1, scale: 1, duration: 0.5 });
};
