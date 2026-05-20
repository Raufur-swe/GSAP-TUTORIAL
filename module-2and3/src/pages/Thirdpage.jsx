import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Thirdpage = () => {

    const containerRef = useRef();
    useGSAP(() => {
        const sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: `+=3000`,
                markers: true

            }
        })
    })
    return (
        <>
            <section className='h-screen bg-red-500 flex items-center justify-center'>
                <h1 className='text-5xl'>
                    Scroll Down
                </h1>
            </section>
            <section ref={containerRef} className='overflow-hidden'>
                <div className='flex w-[400vw] h-screen'>
                    <div className="panel w-screen h-screen bg-black text-white flex justify-center items-center text-6xl">
                        one
                    </div>
                    <div className="panel w-screen h-screen bg-yellow-500 text-white flex justify-center items-center text-6xl">
                        Two
                    </div>
                    <div className="panel w-screen h-screen bg-blue-500 text-white flex justify-center items-center text-6xl">
                        three
                    </div>
                    <div className="panel w-screen h-screen bg-olive-500 text-white flex justify-center items-center text-6xl">
                        three
                    </div>
                </div>
            </section>
            <section className="h-screen bg-yellow-300 flex items-center justify-center">
                <h1 className="text-5xl font-bold">
                    End
                </h1>
            </section>
        </>
    )
}

export default Thirdpage