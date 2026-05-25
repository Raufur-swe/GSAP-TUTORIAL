import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import _SplitText from 'gsap/SplitText'
gsap.registerPlugin(_SplitText)
const SplitText = () => {
  const titleref = useRef()
  useGSAP(() => {
    const split = new _SplitText(titleref.current, {
      type: "chars"
    })
    gsap.from(split.chars, {
      y: 100,

      opacity: 0,
      //filter: "blur(10px)",
      //     rotateX: -90,
      // transformOrigin: "top center",
      duration: 1.5,
      stagger: 0.04,
      ease: "power4.out"
    })

  })
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <h1
        ref={titleref}
        className="text-7xl font-bold overflow-hidden"
      >
        Creative Developer
      </h1>
    </div>
  )
}

export default SplitText