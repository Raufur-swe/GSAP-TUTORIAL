import { useEffect } from "react";
import gsap from "gsap";

function Animation2() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        ".hero-text",
        {
          opacity: 0,
          y: 30,
          duration: 1,
        },
        "-=0.5" // ager animation sesh hobar 0.5 sec purbe start hobe
      )
      .from(
        ".hero-btn",
        {
          scale: 0,
          duration: 0.8,
          ease: "elastic.out(1,0.5)",
        },
        "-=0.4" // ager animation sesh hobar 0.4 sec purbe start hobe
      );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="hero-title text-5xl font-bold">
        Learn GSAP
      </h1>

      <p className="hero-text text-lg">
        Premium animations in React
      </p>

      <button className="hero-btn bg-black text-white px-6 py-3 rounded-xl">
        Get Started
      </button>
    </div>
  );
}

export default Animation2;