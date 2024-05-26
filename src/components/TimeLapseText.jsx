import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);
const TimeLapseText = () => {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.to(textRef.current, {
      duration: "2",
      text: {
        value: "your name text anjays",
        speed: 2,
        newClass: "class2",
        delimiter: "",
      },
    });
  }, []);

  return (
    <section className="grid gap-5  min-h-screen w-screen place-content-center py-10 bg-white text-black">
      <p ref={textRef}></p>
    </section>
  );
};

export default TimeLapseText;
