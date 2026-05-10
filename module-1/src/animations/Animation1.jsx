import React, { useEffect } from 'react'
import gsap from 'gsap'

const Animation1 = () => {
  useEffect(()=>{
    gsap.from(".fade-section",{
      y:80,
      opacity:0,
      duration:1,
      stagger:0.3,
      ease:"power2.out"
    })
  },[])
  return (
    <div className=' mt-10 bg-gray-100 p-10 space-y-10  '>
      <section className='fade-section bg-white p-10 rounded-2xl shadow-md'>
        <h1 className='text-4xl font-bold mb-4' >Hero section</h1>
        <p>
          This Section fade smoothly
        </p> 
      </section>
       <section className='fade-section bg-blue-500 text-white p-10 rounded-2xl shadow-md '>
          <h2 className='"text-3xl font-bold mb-4"'>About Section</h2>
          <p>Gsap make animation smooter</p>
        </section>
        <section className="fade-section bg-black text-white p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Contact Section
        </h2>
        <p>
          Professional cinematic animations.
        </p>
      </section>
    </div>
  )
}

export default Animation1