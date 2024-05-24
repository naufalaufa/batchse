import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TestinTimeline = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { color: "black" },
      {
        color: "white",
        scrollTrigger: {
          trigger: elementRef.current,
          scrub: 1,
        },
      }
    );
  });
  return (
    <>
      <div className="text-3xl" ref={elementRef}>
        hehe testing timeline
      </div>
    </>
  );
};

export default TestinTimeline;
