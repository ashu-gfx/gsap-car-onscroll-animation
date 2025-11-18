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

function initAnimations1 () {
  gsap.registerPlugin(ScrollTrigger)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1',
      start: 'top top',
      end: '+=1500',
      // markers: true,
      scrub: 1,
      pin: true
    }
  })

  tl.to('.section1 h1', { y: '-210%' }, -0.5)
  tl.to('.section1 .heading', { height: '20vh' }, -0.5)
  tl.from('.page5 .content', { opacity: 0, y: 450 }, -0.5, '<')

  ScrollTrigger.create({
    trigger: '.page5',
    start: '220% top',
    end: '330% top',
    markers: true,
    scrub: 0.5, // <— smooth animation linked to scroll
    onUpdate: self => {
      // self.progress goes from 0 to 1 as you scroll
      gsap.to('.slider', {
        y: self.progress * 100 + '%', // moves slider from 0% → 100%
        ease: 'power1.out',
        overwrite: 'auto'
      })

      // optional color change based on scroll progress
      if (self.progress > 0.5) {
        gsap.to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 })
        gsap.to('.left2 h5, .left2 p', { color: '#fff', duration: 0.2 })
      } else {
        gsap.to('.left1 h5, .left1 p', { color: '#fff', duration: 0.2 })
        gsap.to('.left2 h5, .left2 p', { color: '#222', duration: 0.2 })
      }
    }
  })

  // Video switch
  gsap.to('.vid1', {
    height: 0,
    width: 0,
    scrollTrigger: {
      trigger: '.page5',
      start: '220% top',
      end: '330% top',

      // markers: true,
      scrub: 0.5
    }
  })

  gsap.to('.vid2', {
    y: '0',
    opacity: 1,
    scrollTrigger: {
      trigger: '.page5',
      start: '220% top',
      end: '330% top',
      scrub: 0.5
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

  // .to('.slider', { y: '100%' })
  // .to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 }, '>-=0.5')
  // .to('.left2 h5, .left2 p', { color: '#fff', duration: 0.2 }, '>=0.1')

  // ScrollTrigger.create({
  //   trigger: '.page5',
  //   start: '190% top',
  //   end: '220% top',
  //   markers: true,
  //   onEnter: () => {
  //     gsap.set('.slider', { y: '100%' }) // instantly bottom
  //     gsap.to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 })
  //     gsap.to('.left2 h5, .left2 p', { color: '#fff', duration: 0.2 })
  //   },
  //   onLeaveBack: () => {
  //     gsap.set('.slider', { y: '0' }) // instantly top
  //     gsap.to('.left1 h5, .left1 p', { color: '#fff', duration: 0.2 })
  //     gsap.to('.left2 h5, .left2 p', { color: '#222', duration: 0.2 })
  //   }
  // })
}

function initAnimations2 () {
  gsap.registerPlugin(ScrollTrigger)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1',
      start: 'top top',
      end: '+=2500', // increased to cover all animations
      scrub: 1,
      pin: true,
      markers: true
    }
  })

  // First: heading shrink + move
  tl.to('.section1 h1', { y: '-210%' }, 0)
    .to('.section1 .heading', { height: '20vh' }, 0)
    .from('.page5 .content', { opacity: 0, y: 450 }, 0)

  // Second: slider move from 0% to 100%
  tl.to('.slider', { y: '100%' }, '+=0.2')

  // Third: text color change for left1/left2
  tl.to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 }, '<').to(
    '.left2 h5, .left2 p',
    { color: '#fff', duration: 0.2 },
    '<'
  )

  // Fourth: Video transitions
  tl.to('.vid1', { height: 0, width: 0 }, '<').to(
    '.vid2',
    { y: '0', opacity: 1 },
    '<'
  )
}

function initAnimations3 () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1',
      start: 'top top',
      end: '+=2500',
      scrub: 1,
      pin: true,
      markers: true
    }
  })

  tl.to('.section1 h1', { y: '-210%' }, 0)
    .to('.section1 .heading', { height: '20vh' }, 0)
    .from('.page5 .content', { opacity: 0, y: 450 }, 0)

    .addLabel('left1Position') // tag for left1
    .to('.slider', { y: '100%' }, '+=0.2')
    .to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 }, '<')
    .to('.left2 h5, .left2 p', { color: '#fff', duration: 0.2 }, '<')

    .addLabel('left2Position') // tag for left2
    .to('.vid1', { height: 0, width: 0 }, '<')
    .to('.vid2', { y: '0', opacity: 1 }, '<')

  // -------------------
  // Simple helper function
  // -------------------
  function scrollToLabel (timeline, label) {
    let st = timeline.scrollTrigger
    let labelProgress = timeline.labels[label] / timeline.duration()
    let scrollPos = st.start + labelProgress * (st.end - st.start)

    gsap.to(window, {
      duration: 1,
      scrollTo: scrollPos,
      ease: 'power2.inOut'
    })
  }

  // -------------------
  // Click events
  // -------------------
  document
    .querySelector('.left1')
    .addEventListener('click', () => scrollToLabel(tl, 'left1Position'))
  document
    .querySelector('.left2')
    .addEventListener('click', () => scrollToLabel(tl, 'left2Position'))
}

function initAnimations () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // -------------------
  // MAIN TIMELINE
  // -------------------
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1',
      start: 'top top',
      end: '+=2500', // total scroll range
      scrub: 1,
      pin: true,
      markers: true,
      onRelease: () => snapSlider() // 👈 magnetic effect
    }
  })

  // -------------------
  // TIMELINE ANIMATIONS
  // -------------------
  tl.to('.section1 h1', { y: '-210%' }, 0)
    .to('.section1 .heading', { height: '20vh' }, 0)
    .from('.page5 .left', { opacity: 0, y: 450 }, 0)
    .from('.page5 .right', { opacity: 0, y: 450 }, 0.1)
    // .from('.items', { opacity: 0, y: 250 }, 0.15)
    .from('.items > div', {
      // target all child divs
      opacity: 0,
      y: 250,
      duration: 0.1,
      ease: 'elastic.inOut(1,1)',
      stagger: 0.02
    })

    .addLabel('left1Position') // 📍 Tag for left1
    .to('.slider', { y: '100%' }, '+=0.2')
    .to('.left1 h5, .left1 p', { color: '#222', duration: 0.2 }, '<')
    .to('.left2 h5, .left2 p', { color: '#fff', duration: 0.2 }, '<')
    .to(
      '.items > div',
      {
        // target all child divs
        opacity: 0,
        y: 250,
        duration: 0.05,
        ease: 'elastic.inOut(1,1)',
        stagger: 0.02
      },
      '<'
    )

    .addLabel('left2Position') // 📍 Tag for left2
    .to('.vid1', { height: 0, width: 0 }, '<')
    .to('.vid2', { y: '0', opacity: 1 }, '<')

  // -------------------
  // SCROLL TO LABEL HELPER
  // -------------------
  function scrollToLabel (timeline, label) {
    let st = timeline.scrollTrigger
    let labelProgress = timeline.labels[label] / timeline.duration()
    let scrollPos = st.start + labelProgress * (st.end - st.start)

    gsap.to(window, {
      duration: 1,
      scrollTo: scrollPos,
      ease: 'power2.inOut'
    })
  }

  // -------------------
  // CLICK NAVIGATION
  // -------------------
  document
    .querySelector('.left1')
    .addEventListener('click', () => scrollToLabel(tl, 'left1Position'))
  document
    .querySelector('.left2')
    .addEventListener('click', () => scrollToLabel(tl, 'left2Position'))

  // -------------------
  // MAGNETIC SLIDER SNAP
  // -------------------
  function snapSlider () {
    let st = tl.scrollTrigger
    let progress = st.progress
    let snapTo = progress < 0.5 ? 0 : 1 // 0% or 100%

    gsap.to(window, {
      duration: 0.4,
      scrollTo: st.start + snapTo * (st.end - st.start),
      ease: 'power2.out'
    })
  }
}

window.addEventListener('load', () => {
  ScrollTrigger.refresh()
})

window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger)
  initAnimations() // your GSAP code
})
