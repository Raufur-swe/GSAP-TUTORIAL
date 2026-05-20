import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,

        start: "top top",

        end: "+=1000", //pin থাকবে 1000px scroll পর্যন্ত

        pin: true,

        markers: true,
      },
    });
  });

  return (
    <>
      {/* top section */}
      <section className="h-screen bg-red-300 flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Scroll Down
        </h1>
      </section>

      {/* pinned section */}
      <section
        ref={sectionRef}
        className="h-screen bg-black text-white flex items-center justify-center"
      >
        <h1 className="text-6xl font-bold">
          I AM PINNED 😎
        </h1>
      </section>

      {/* next section */}
      <section className="h-screen bg-blue-300 flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Next Section
        </h1>
      </section>
    </>
  );
};

export default Hero;