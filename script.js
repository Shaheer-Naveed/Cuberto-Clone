// Sidebar toggle elements
const menuBtn = document.getElementById("menu");
const crossBtn = document.getElementById("cross");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// 👉 Open sidebar animation
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

// 👉 Close sidebar animation
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

// 👉 Clicking outside sidebar closes it
overlay.addEventListener("click", () => {
  crossBtn.click();
});

// 👉 Shery.js enhancements only on desktop
if (window.innerWidth > 768) {
  // Custom cursor with skew effect
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });

  // Magnetic effect on elements with .magnet
  Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}



// 👉 Hover videos on .hvr elements
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["assets/0.mp4", "assets/1.mp4", "assets/2.mp4"],
});

// 👉 Vertical scroll effect for left text elements in featured section
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

// 👉 Shery image transition effect synced with scroll
let sections = document.querySelectorAll(".fleftelem");
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
// 👉 Reload page on window resize (used to reinit Shery effects properly)
window.addEventListener("resize", () => {
  location.reload(); 
});