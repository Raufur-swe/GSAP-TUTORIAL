


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxHero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(bgRef.current, {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text parallax
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Text */}
        <div
          ref={textRef}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4">
            Smooth Parallax
          </h1>
          <p className="text-lg opacity-90">
            React + GSAP ScrollTrigger
          </p>
        </div>
      </section>

      {/* Next Section */}
      <section className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-6">
            Next Section
          </h2>
          <p className="text-neutral-400 text-lg">
            Scroll করলে hero text উপরে move করবে আর background একটু slow parallax feel দিবে.
          </p>
        </div>
      </section>
    </div>
  );
}




