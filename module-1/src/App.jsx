import React, { useRef } from 'react'
import gsap from 'gsap'

const App = () => {
  const boxRef = useRef()
  const animate = ()=>{
    gsap.to(boxRef.current,{
      x:300,
      duration : 2
    })
  }
  return (
    <div>
      <div
      ref={boxRef}
      className='bg-red-500 w-32 h-32 '
      />
      <button className='px-4 py-2 rounded-2xl cursor-pointer bg-sky-700' onClick={animate} >Animate</button>
    </div>
  )
}

export default App