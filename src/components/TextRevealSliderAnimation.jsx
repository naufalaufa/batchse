import gsap from "gsap";
import { useEffect, useRef } from "react";

const TextRevealSliderAnimation = () => {
  const textRefAnimation = useRef(null);
  useEffect(() => {
    gsap.to(textRefAnimation.current, {
      scrollTrigger: {
        trigger: textRefAnimation.current,
        scrub: 1,
      },
      translateX: -20,
    });
  });
  return (
    <>
      <div ref={textRefAnimation} className="flex items-center gap-2">
        <h1 className="text-8xl">Monaco</h1>
        <h1 className="text-8xl">Austria</h1>
        <h1 className="text-8xl">Hungary</h1>
        <h1 className="text-8xl">NetherLands</h1>
        <h1 className="text-8xl">Italy</h1>
      </div>
    </>
  );
};

export default TextRevealSliderAnimation;
