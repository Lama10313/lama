document.addEventListener("DOMContentLoaded", () => {

  /*  GSAP – Wave animation */
  const wave = document.getElementById("squiggle");
  if (wave && typeof gsap !== "undefined" && typeof MorphSVGPlugin !== "undefined") {
    gsap.registerPlugin(MorphSVGPlugin);

    gsap.to(wave, {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      morphSVG: "#squiggleAlt"
    });
  }

  /* Back-to-top knapp*/

  const backToTopBtn = document.querySelector(".back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.pointerEvents = "auto";
      } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.pointerEvents = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ----------------------------------------------------------- Kontakt-knapp (åpner mail)*/
  const contactButtons = document.querySelectorAll(".contact");

  contactButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "mailto:lama.ghawi13@gmail.com";
    });
  });

});
