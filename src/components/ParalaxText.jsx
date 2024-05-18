import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import VideoTimeLapse from "../../public/0517(1).mp4";

gsap.registerPlugin(ScrollTrigger);
const ParalaxText = () => {
  const textParalaxRef = useRef(null);
  const videoAnimationRef = useRef(null);

  useEffect(() => {
    gsap.to(textParalaxRef.current, {
      scrollTrigger: {
        trigger: textParalaxRef.current,
        scrub: 1,
      },
      color: "black",
      width: "100%",
      height: "100vh",
      borderRadius: "10px",
    });
  });

  return (
    <>
      <h1 className="text-xl font-bold text-center mt-52 mb-4">Core Memory</h1>
      <section className="min-h-screen md:grid md:grid-cols-2    gap-5  p-4   grid place-content-center m-auto place-items-center">
        <div>
          <video
            ref={videoAnimationRef}
            className="rounded-lg w-[400px]"
            autoPlay
            disableRemotePlayback
            loop
            muted
          >
            <source src={VideoTimeLapse} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-3 gap-4 relative">
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px]  md:w-[110px] md:h-[110px]  lg:w-[150px] lg:h-[150px] my-5  rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5 rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5  rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5 rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5 rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5 rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5  rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5 rotate-6 rounded-lg"></div>
          <div className="bg-yellow-500 p-2 w-[95px] h-[95px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] my-5  rotate-6 rounded-lg"></div>
        </div>
      </section>
    </>
  );
};

export default ParalaxText;
