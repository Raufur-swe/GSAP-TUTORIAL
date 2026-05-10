import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Animtion3 = () => {
    const circleref = useRef()
    useEffect(()=>{
        gsap.to(circleref.current,{
            y:-200,
            repeat:-1,
            yoyo:true,
            duration:1.5,
            ease: 'power1.inOut'

        })
    },[])
  return (
    <div className='bg-black flex items-center justify-center mt-10 p-4'>
        <div
        ref={circleref}
        className='w-40 h-40 rounded-full bg-blue-400'
        />
    </div>
  )
}

export default Animtion3