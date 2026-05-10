import React, { useRef } from 'react'
import gsap from 'gsap'
import Animation1 from './animations/Animation1'
import Animation2 from './animations/Animation2'
import Animtion3 from './animations/Animtion3'


const App = () => {
  const boxRef = useRef()
  const animate = ()=>{
  //  gsap.fromTo(boxRef.current,{
  //  //start
  //   x:-200,
  //   opacity:0
  //  },//end
  //  {
  //   x:0,
  //   opacity:1,
  //   duration:1,
  //   ease: "elastic.out"
    
  //  })
  const tl = gsap.timeline()
  tl.to(boxRef.current,{
    x:300,
    duration:1
  }).to(boxRef.current,{
    rotate:360,
    duration:1,
  }).to(boxRef.current,{
    scale:1.5,
    duration:1
  })
  }
  return (
    <div>
      <div
      ref={boxRef}
      className='bg-red-500 w-32 h-32 '
      />
      <button className='px-4 py-2 rounded-2xl cursor-pointer bg-sky-700' onClick={animate} >Animate</button>
    <Animation1/>
    <Animation2/>
    <Animtion3/>
    </div>
  )
}

export default App