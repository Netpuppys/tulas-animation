"use client";
import { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      document.querySelector(
        ".section"
      ).style.clipPath = `circle(${value}px at center center)`;
      document.querySelector(".text").style.left = `${100 - value / 5}%`;
      document.querySelector(".innerText").style.left = `${100 - value / 5}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[-50px] text-4xl text-[#9e8489]">
        TULAS Scroll Animation
      </h3>
      <h2 className="fixed top-1/2 left-full transform -translate-y-1/2 whitespace-nowrap z-10 text-[10vw] text-white text">
        TULAS Animation
      </h2>
      <section className="fixed top-0 w-full h-screen bg-[#9e8489] flex justify-center items-center clip-circle-50px section">
        <h2 className="fixed top-1/2 left-full transform -translate-y-1/2 whitespace-nowrap z-10 text-[10vw] text-white innerText">
          TULAS Animation
        </h2>
      </section>
      <div className="relative mt-[250vh] bg-[#0e112e] p-[100px] text-white">
        <h2 className="text-2.5xl mb-5">Scroll Animation</h2>
      </div>
    </div>
  );
};

export default Animation;
