import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Flower = () => {
  const flowerRef = React.useRef(null);

  React.useEffect(() => {
    const flower = flowerRef.current;
    const petals = flower.querySelectorAll(".petal");
    const center = flower.querySelector(".center");

    gsap.set(petals, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 0,
    });

    gsap.to(petals, {
      duration: 2,
      x: 50,
      y: 50,
      rotation: 360,
      scale: 1,
      stagger: {
        each: 0.1,
      },
      scrollTrigger: {
        trigger: flower,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.to(center, {
      duration: 2,
      scale: 1.5,
      scrollTrigger: {
        trigger: flower,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="flower rounded-full grid w-full place-content-center gap-10 my-32"
      ref={flowerRef}
    >
      <div className="petal bg-yellow-600 grid place-content-center w-[200px] h-[200px]">
        <div className="bg-red-700 rounded-xl w-[100px] h-[100px]" />
      </div>
      <div className="petal bg-yellow-600 w-[200px] h-[200px]">
        <div></div>
      </div>
      <div className="petal bg-yellow-600 w-[200px] h-[200px]"></div>
      <div className="petal bg-yellow-600 w-[200px] h-[200px]"></div>
      <div className="petal bg-yellow-600 w-[200px] h-[200px]"></div>
    </div>
  );
};

export default Flower;
