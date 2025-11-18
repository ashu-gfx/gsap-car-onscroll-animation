// gsap.registerPlugin(ScrollTrigger);

// // Timeline for heading reveal
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.section1',
//     start: 'top top',
//     end: '+=2000',
//     scrub: 1,
//     pin: true,
//     // markers: true
//   }
// });

// tl.to('.section1 h1', { y: '-210%' })
//   .from('.page5 .content', { opacity: 0, y: 350 }, "<");

// // Slider animation & color switch
// gsap.to('.slider', {
//   y: '100%',
//   scrollTrigger: {
//     trigger: '.page5',
//     start: '350% top',
//     end: '420% top',
//     scrub: 0.5,
//     onUpdate: (self) => {
//       gsap.to('.left1 h5, .left1 p', {
//         color: self.progress > 0.5 ? '#222' : '#fff',
//         duration: 0.2
//       });
//       gsap.to('.left2 h5, .left2 p', {
//         color: self.progress > 0.5 ? '#fff' : '#222',
//         duration: 0.2
//       });
//     }
//   }
// });

// // Video switch
// gsap.to('.vid1', {
//   height: 0,
//   width: 0,
//   scrollTrigger: {
//     trigger: '.page5',
//     start: 'top center',
//     end: 'bottom top',
//     scrub: 0.5
//   }
// });

// gsap.to('.vid2', {
//   y: '0%',
//   opacity: 1,
//   scrollTrigger: {
//     trigger: '.page5',
//     start: 'top center',
//     end: 'bottom top',
//     scrub: 0.5
//   }
// });
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section1',
    start: 'top top',
    end: '+=1000',
    scrub: 1,
    pin: true
  }
})




// // First animation: heading
// gsap.to('.section1 h1', {
//   y: '-210%',
//   scrollTrigger: {
//     trigger: '.section1',
//     start: '2% top',     // scroll start position
//     end: '20% top',       // scroll end position (percentage of viewport)
//     scrub: 1,
//     pin: true
//   }
// });

// // Second animation: content fade in
// gsap.from('.page5 .content', {
//   opacity: 0,
//   y: 450,
//   scrollTrigger: {
//     trigger: '.section1',
//     start: '2% top',     // starts after first finishes
//     end: '20% top',       // ends here
//     scrub: 1,
//     pin: true
//   }
// });


tl.to('.section1 h1', { y: '-210%'  },-0.5)
  .from('.page5 .content', { opacity: 0, y: 450 },-0.5 , '<')
  // .to('.slider', { y: '100%' })
  // .to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 }, '>-=0.5')
  // .to('.left2 h5, .left2 p', { color: '#fff', duration: 0.2 }, '>=0.1')

  ScrollTrigger.create({
  trigger: '.page5',
  start: '190% top',
  end: '240% top',
  markers: true,
  // scrub: 6,
  onEnter: () => {
    gsap.set('.slider', { y: '100%' }); // instantly bottom
    gsap.to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 });
    gsap.to('.left2 h5, .left2 p', { color: '#fff', duration: 0.2 });
  },
  onLeaveBack: () => {
    gsap.set('.slider', { y: '0%' }); // instantly top
    gsap.to('.left1 h5, .left1 p', { color: '#fff', duration: 0.2 });
    gsap.to('.left2 h5, .left2 p', { color: '#222', duration: 0.2 });
  }
});



// Video switch
gsap.to('.vid1', {
  height: 0,
  width: 0,
  scrollTrigger: {
    trigger: '.page5',
    start: '190% top',
    end: '200% top',
    // markers: true,
    scrub: 0.5
  }
})

gsap.to('.vid2', {
  y: '0%',
  opacity: 1,
  scrollTrigger: {
    trigger: '.page5',
    start: '190% top',
    end: '220% top',
    scrub: 0.5
  }
})
