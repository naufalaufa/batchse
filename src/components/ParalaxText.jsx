import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ParalaxText = () => {
  const textParalaxRef = useRef(null);
  useEffect(() => {
    gsap.to(textParalaxRef.current, {
      scrollTrigger: {
        trigger: textParalaxRef.current,
      },
    });
  });

  return (
    <section className="min-h-screen w-screen grid-cols-2 bg-white grid place-content-center place-items-center"></section>
  );
};

export default ParalaxText;
