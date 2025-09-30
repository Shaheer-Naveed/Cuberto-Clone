// Sidebar toggle elements
const menuBtn = document.getElementById("menu");
const crossBtn = document.getElementById("cross");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  gsap.to("#sidebar", {
    right: 0,
    duration: 0.5,
    ease: "power2.out"
  });
  gsap.to("#overlay", {
    opacity: 1,
    duration: 0.5,
    pointerEvents: "auto"
  });
});
if(window.innerWidth<786){
  crossBtn.addEventListener("click", () => {
    gsap.to("#sidebar", {
      right: "-60%",
      duration: 0.5,
      ease: "power2.in"
    });
    gsap.to("#overlay", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        overlay.style.pointerEvents = "none";
      }
    });
  });
}
else{
  crossBtn.addEventListener("click", () => {
    gsap.to("#sidebar", {
      right: "-50%",
      duration: 0.5,
      ease: "power2.in"
    });
    gsap.to("#overlay", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        overlay.style.pointerEvents = "none";
      }
    });
  });
}

overlay.addEventListener("click", () => {
  crossBtn.click();
});

if (window.innerWidth > 768) {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });

  Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

Shery.hoverWithMediaCircle(".hvr", {
  videos: ["assets/0.mp4", "assets/1.mp4", "assets/2.mp4"],
});

if(window.innerWidth < 768){
  gsap.to(".fleftelem", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 2,
    },
    x: "-100%",
    ease: Power1,
  });
}
else{
  gsap.to(".fleftelem", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
}

let sections = document.querySelectorAll(".fleftelem");
if(window.innerWidth>768){
  Shery.imageEffect(".images", {
    style: 6,
    slideStyle: (setScroll) => {
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: (prog) => {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });
}
gsap.utils.toArray(".project").forEach((card, i) => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%", 
      toggleActions: "play none none reverse"
    }
  });
});
window.addEventListener("resize", () => {
  location.reload(); 
});