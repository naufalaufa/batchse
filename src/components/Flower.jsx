import { useEffect, useRef } from "react";
import ImageGif from "../assets/image/flower.gif";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Flower = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
      },
      scale: 1.2,
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white p-8 place-content-center place-items-center rounded-lg"
    >
      <img src={ImageGif} alt={ImageGif} />
      <div className="p-3 max-w-[350px]">
        <h1 className="text-black  my-3 md:text-4xl text-center ">
          Like A flower
        </h1>
        <p className="text-black text-center text-[10px] my-3 max-w-[500px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut!
          Blanditiis impedit reiciendis quo harum accusantium optio delectus
          cumque odio, pariatur non quam sequi totam consectetur! Laudantium
          cumque quia fuga.
        </p>
      </div>
    </div>
  );
};

export default Flower;
