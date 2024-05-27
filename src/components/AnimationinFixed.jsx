import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BsFlower1 } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const AnimationinFixed = () => {
  const flowerRef = useRef(null);
  const flowerTwoRef = useRef(null);
  const flowerThreeRef = useRef(null);
  useEffect(() => {
    gsap.to(".hehe".current, {
      scrollTrigger: {
        trigger: ".hehe".current,
        scrub: true,
      },
      scale: 1.8,
    });
    gsap.to(flowerTwoRef.current, {
      scrollTrigger: {
        trigger: flowerTwoRef.current,
        scrub: true,
      },
      scale: 3,
    });
    gsap.to(flowerThreeRef.current, {
      scrollTrigger: {
        trigger: flowerThreeRef.current,
        scrub: true,
      },
      scale: 1.7,
    });
    gsap.to(flowerRef.current, {
      scrollTrigger: {
        scrub: true,
      },
      scale: 2,
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className=" grid w-full my-20 min-h-screen place-content-center place-items-center">
        <div className="sticky top-[40%] w-[150px] rounded-full h-[150px] grid place-content-center  bg-yellow-300">
          <div
            ref={flowerRef}
            className=" bg-red-500 rounded-full w-[80px] grid place-content-center h-[80px]"
          >
            <div
              ref={flowerTwoRef}
              className="bg-yellow-300 grid place-content-center rounded-full w-[120px] h-[120px]"
            >
              <div
                ref={flowerThreeRef}
                className="bg-red-500 rounded-full w-[60px] grid place-content-center h-[60px]"
              >
                <div className="bg-yellow-500 grid place-content-center rounded-full w-[40px] shadow-sm shadow-slate-600 z-[9999999999] h-[40px]">
                  <span>
                    <BsFlower1 className="animate-spin" color="white" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[150px] h-[15px] shadow-md  bg-yellow-500"></div>
      </div>
    </>
  );
};

export default AnimationinFixed;
