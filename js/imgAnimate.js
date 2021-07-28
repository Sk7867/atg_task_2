gsap.registerPlugin(ScrollTrigger);

gsap.from('.sec1_img1, .sec1_img2', {
  scrollTrigger: {
    trigger: '#section_1',
    start: 'center bottom',
    end: 'top bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  duration: 1,
  stagger: 0.3,
  opacity: 0,
  ease: 'power1.in',
});

gsap.from('.sec2_img1', {
  scrollTrigger: {
    trigger: '#section_2',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  duration: 1,
  ease: 'power1.in',
});
gsap.from('.sec2_img2', {
  scrollTrigger: {
    trigger: '#section_2',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '-100%',
  duration: 0.7,
  ease: 'power1.in',
});

gsap.from('.sec3_img1', {
  scrollTrigger: {
    trigger: '#section_3',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  opacity: 0,
  duration: 0.7,
  ease: 'power1.in',
});
gsap.from('.sec3_img2', {
  scrollTrigger: {
    trigger: '#section_3',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '-100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});

gsap.from('.sec4_img1', {
  scrollTrigger: {
    trigger: '#section_4',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  opacity: 0,
  duration: 0.5,
  ease: 'power1.in',
});
gsap.from('.sec4_img2', {
  scrollTrigger: {
    trigger: '#section_4',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '-100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec4_img4', {
  scrollTrigger: {
    trigger: '#section_4',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '-100%',
  x: '-50%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec4_img5', {
  scrollTrigger: {
    trigger: '#section_4',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '-100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec4_img7', {
  scrollTrigger: {
    trigger: '#section_4',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  x: '100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec5_img1', {
  scrollTrigger: {
    trigger: '#section_5',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  x: '100%',
  opacity: 0,
  duration: 0.7,
  ease: 'power1.in',
});
gsap.from('.sec5_img2', {
  scrollTrigger: {
    trigger: '#section_5',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '-100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec5_img3', {
  scrollTrigger: {
    trigger: '#section_5',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec5_img4', {
  scrollTrigger: {
    trigger: '#section_5',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '-100%',
  x: '-50%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec5_img5', {
  scrollTrigger: {
    trigger: '#section_5',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
gsap.from('.sec6_img1', {
  scrollTrigger: {
    trigger: '#section_6',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  opacity: 0,
  duration: 0.7,
  ease: 'power1.in',
});
gsap.from('.sec7_img1', {
  scrollTrigger: {
    trigger: '#section_7',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  opacity: 0,
  duration: 0.7,
  ease: 'power1.in',
});
gsap.from('.sec7_img2', {
  scrollTrigger: {
    trigger: '#section_7',
    start: 'center bottom',
    // markers: true,
    toggleActions: 'restart none none reverse',
  },
  y: '100%',
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  ease: 'power1.in',
});
