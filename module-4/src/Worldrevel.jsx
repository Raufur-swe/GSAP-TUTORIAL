import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import _SplitText from 'gsap/SplitText'
gsap.registerPlugin(_SplitText)
const Wordrevel = () => {
  const titleref = useRef()
  useGSAP(()=>{
    const split = new _SplitText(titleref.current,{
      type : "words"
    })
    gsap.from(split.words,{
      y: 100,
      opacity : 0,
       //filter: "blur(10px)",
      duration :1 ,
      stagger :0.15,
       ease: "power4.out"
    })
  })
  return (
     <div className="h-screen flex justify-center items-center bg-purple-600 text-white">
      <h1
      ref={titleref}
        className="text-5xl font-bold overflow-hidden"
      >
        We Build Digital Experiences
      </h1>
    </div>
  )
}

export default Wordrevel