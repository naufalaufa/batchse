import gsap from "gsap";
import { useEffect, useRef } from "react";

const GsapOnly = () => {
  const textParalaxRef = useRef(null);
  const loadingAnimationRef = useRef(null);

  useEffect(() => {
    gsap.to(textParalaxRef.current, {
      scrollTrigger: {
        trigger: textParalaxRef.current,
        scrub: 1,
      },
      color: "black",
      width: "100%",
      scale: 1.5,
      height: "100vh",
      borderRadius: "10px",
    });
    gsap.to(loadingAnimationRef.current, {
      scrollTrigger: {
        trigger: loadingAnimationRef.current,
      },
      color: "black",
      scale: 1.2,
      height: "100vh",
      borderRadius: "101px",
      translateY: "50px",
      rotate: "100px",
    });
  });
  return (
    <>
      <div
        ref={loadingAnimationRef}
        className="w-10 grid  place-content-center h-5 m-auto bg-white "
      >
        <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[80px] h-[80px]">
          <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px] absolute left-7 ">
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[80px] h-[80px]">
          <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px] absolute left-7 ">
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="bg-yellow-600 shadow-sm shadow-slate-500 rotate-45 w-[80px] h-[80px]">
          <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px] absolute left-7 ">
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="bg-yellow-300 shadow-sm gap-3 shadow-slate-500 rotate-45 w-[100px] h-[100px] grid place-content-center ">
          <div className="bg-white p-2 rounded-lg w-[50px] h-[50px]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              mollitia numquam ad fugiat ipsa dolor alias magni est eos rem
              beatae atque cumque quisquam laboriosam, eius eligendi
              consequuntur eum doloribus?
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg w-[50px] h-[50px]"></div>
          <div className="bg-white p-2 rounded-lg w-[50px] h-[50px]"></div>
          <div className="bg-white p-2 rounded-lg w-[50px] h-[50px]"></div>
        </div>
        <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 relative w-[80px] h-[80px] grid place-content-center">
          <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px] absolute left-7 ">
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[80px] h-[80px]">
          <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px] absolute left-7 ">
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[80px] h-[80px]">
          <div className="bg-yellow-600 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px] absolute left-7 ">
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
            <div className="bg-red-400 shadow-sm shadow-slate-600 rotate-45 w-[50px] h-[50px]"></div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] text-center m-auto">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          voluptatum mollitia. Eveniet quae consequatur aperiam minus, adipisci,
          fuga natus voluptate expedita accusantium quasi eaque nostrum
          quibusdam iste inventore reprehenderit esse.
        </p>
      </div>
    </>
  );
};

export default GsapOnly;
