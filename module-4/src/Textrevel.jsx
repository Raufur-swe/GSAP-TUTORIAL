import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import _SplitText from 'gsap/SplitText'
import React, { useRef } from 'react'

gsap.registerPlugin(_SplitText ,_ScrollTrigger)
const Textrevel = () => {
const sectionRef = useRef()
const textRef = useRef()
useGSAP(() => {
  // text split
  const split = new _SplitText(textRef.current, {
    type: "chars",
  });
  // end positins
  const scrollDistance =split.chars.length * 20;

  // initial state
  gsap.set(split.chars, {
    opacity: 0.1,
    //filter: "blur(8px)",
    color: "#666",
  });

  // timeline বানাও
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      // section top screen top এ আসলে
      start: "top top",
      // scroll distance
      end: `+=${scrollDistance}`,
      // smooth scroll sync
      scrub: 1.5,
      // section pin
      pin: true,
      markers: true,
    },
  });

  // reveal animation timeline এ add
  tl.to(split.chars, {
    opacity: 1,
    filter: "blur(0px)",
    color: "#fff",
    stagger: 0.03,
    ease: "power2.out",
  });
}, []);
    return (
    
    <section 
     ref={sectionRef}
    className='bg-black px-10  min-h-screen flex items-center justify-center'>
          <p
         ref={textRef}
        className="max-w-4xl text-center text-5xl leading-relaxed font-semibold text-white"
      >
        Great products are not built by accident. They are crafted withintention, creativity, and relentless attention to detail.Great products are not built by accident. They are crafted withintention, creativity, and relentless attention to detail.
      </p>
    </section>
  )
}

export default Textrevel