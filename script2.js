// // gsap.to('.section1 .heading', {
// //   height: '32vh',
// //   duration: 0.2,
// //   scrollTrigger: {
// //     trigger: '.section1',
// //     start: 'top top',
// //     scroller: 'body',
// //     scrub: true, // allows forward/backward playback
// //     // markers: true,
// //     scrub: 0.6,
// //     pin: true
// //   }
// // })

// gsap.to('.section1', {
//   height: '100vh',
//   duration: 0.2,
//   scrollTrigger: {
//     trigger: '.section1',
//     start: 'top top',
//     scroller: 'body',
//     scrub: true, // allows forward/backward playback
//     markers: true,
//     scrub: 0.6,
//     pin: true
//   }
// })

// gsap.from('.page5 .part1', {
//   opacity: 0,
//   duration: 20,
//   y: 300,
//   scrollTrigger: {
//     trigger: '.page5',
//     scroller: 'body',
//     start: 'top 20%', // starts when top of .page5 hits bottom of viewport
//     end: 'top 50%', // adjust as needed
//     scrub: 5,

//     // markers: true
//   }
// })

// gsap.from('.page5 .part2', {
//   opacity: 0,
//   duration: 20,
//   y: 500,
//   scrollTrigger: {
//     trigger: '.page5',
//     scroller: 'body',
//     start: 'top 20%', // starts when top of .page5 hits bottom of viewport
//     end: 'top 50%', // adjust as needed
//     scrub: 6
//   }
// })

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section1',
    start: 'top top',
    end: '+=2000', // total scroll distance
    // scrub: 1,
    pin: true
    // markers: true
  }
})

tl.to('.section1', { height: '100vh' })
  .to('.section1 h1', { y: '-210%' })
  .from('.section1 .page5 .content', { opacity: 0, y: 350 })

// .from('.section1 .page5 .right', { opacity: 0, y: 350 })

gsap.to('.slider', {
  y: '100%', // or yPercent: 100 for relative percentage
  scrollTrigger: {
    trigger: '.page5',
    start: '40% top', // when .page5 hits the top of viewport
    end: 'bottom top', // until .page5 bottom hits top of viewport
    scroller: 'body',
    // markers: true,
    scrub: 0.5,
    onUpdate: self => {
      gsap.to('#head1', {
        color: self.progress > 0.5 ? '#222' : '#fff', // change after small scroll
        duration: 0.2
      }),
        gsap.to('#head2', {
          color: self.progress > 0.5 ? '#fff' : '#222', // change after small scroll
          duration: 0.2
        })
    }
    // onEnter: () => gsap.to('#head1', { color: '#131313', duration: 0.5 }),
    // onLeaveBack: () => gsap.to('#head1', { color: '#fff', duration: 0.3 })
    // pin: true
  }
})

gsap.to('.vid1', {
  height: '0%',
  width: '0%',
  delay: 2,
  scrollTrigger: {
    trigger: '.page5',
    start: '40% top', // when .page5 hits the top of viewport
    end: 'bottom top', // until .page5 bottom hits top of viewport
    scroller: 'body',
    // markers: true,
    scrub: 0.5
  }
})

gsap.to('.vid2', {
  y: '0%',
  opacity:'100%',
  scrollTrigger: {
    trigger: '.page5',
    start: '40% top', // when .page5 hits the top of viewport
    end: 'bottom top', // until .page5 bottom hits top of viewport
    scroller: 'body',
    // markers: true,
    scrub: 0.5
  }
})
