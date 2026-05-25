import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

// register plugin for scroll animations
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
  const boxref = useRef()
  useGSAP(() => {
    gsap.to(boxref.current, {
      scale: 0.5,
      opacity: 0,
      // scroll trigger
      scrollTrigger: {
        trigger: boxref.current,
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: true,
      }
    })
  })
  return (
    <section className='h-[200vh] flex justify-center items-center bg-sky-600'>
      <div className='bg-red-500 h-46 w-46 rounded-xl' ref={boxref} >
      </div>
      <button className=' border bg-pink-50 ml-5 '>
        <Link to="/second" >
          next
        </Link>
      </button>
    </section>

  )
}

export default Hero