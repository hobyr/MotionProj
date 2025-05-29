gsap.registerPlugin(SplitText, ScrollTrigger);

let split = SplitText.create(".hero-text h1", { type: "words, chars" });
let tl = gsap.timeline();

//        gsap.from(".hero-img", { scale: 1.12, duration: 2.0, ease: "power1.out" })

tl.from(split.words, { duration: 0.7, y: 50, autoAlpha: 0, stagger: 0.1, ease: "power1.out" }, "<")
  .from(".hero-text h3", { opacity: 0, y: 30, duration: 1 }, "-=0.3");

gsap.to(".hero-img", {
  scale: 1.3,
  filter: "brightness(0.5)",
  ease: "sine.inOut",
  scrollTrigger: {
    trigger: "main",
    //markers: true,
    scrub: true,
    start: 'top 95%',
    end: 'top top',
  }
});

gsap.to(".hero-content", {
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "main",
    scrub: true,
    start: "top 95%",
    end: "top 50%",
  }
});

const titles = gsap.utils.toArray(".section-title");
titles.forEach(title => {
  gsap.from(title, {
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: title,
      scrub: true,
    }
  });
});

const titlesJapanese = gsap.utils.toArray(".bg-section-title");
titlesJapanese.forEach(title => {
  gsap.from(title, {
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: title,
      scrub: true,
    }
  });
});

const covers = gsap.utils.toArray(".section-cover");
covers.forEach(cover => {
  gsap.from(cover, {
//    opacity: 0,
    x: "-100%",
    scrollTrigger: {
      scrub: true,
      trigger: cover,
      start: "top 90%",
      end: "top +=40%",
    }
  });
});

const texts = gsap.utils.toArray(".section-text");
texts.forEach(text => {
  gsap.from(text, {
//    opacity: 0,
    x: "100%",
    ease: "power1.out",
    scrollTrigger: {
      scrub: true,
      trigger: text,
      start: "top 90%",
      end: "top +=40%",
    }
  });
});
