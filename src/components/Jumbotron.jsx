import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import GazaImage from "../assets/image/palestine1.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Jumbotron = ({ isDarkMode }) => {
  const [isImage, setIsImage] = useState(false);
  const oneTextRef = useRef(null);
  const twoTextRef = useRef(null);
  const threeTextRef = useRef(null);
  const forTextRef = useRef(null);
  const fiveTextRef = useRef(null);
  const sixTextRef = useRef(null);
  const sevenTextRef = useRef(null);
  const eightTextRef = useRef(null);
  const nineTextRef = useRef(null);
  const tenTextRef = useRef(null);
  const elevenTextRef = useRef(null);
  const tertinextRef = useRef(null);

  useEffect(() => {
    gsap.to(oneTextRef.current, {
      scrollTrigger: {
        trigger: oneTextRef.current,
        scrub: true,
      },
      x: 40,
    });
    gsap.to(twoTextRef.current, {
      scrollTrigger: {
        trigger: twoTextRef.current,
        scrub: true,
      },
      x: 40,
    });
    gsap.to(threeTextRef.current, {
      scrollTrigger: {
        trigger: threeTextRef.current,
        scrub: true,
      },
      x: 40,
    });
    gsap.to(forTextRef.current, {
      scrollTrigger: {
        trigger: forTextRef.current,
        scrub: true,
      },
      x: -40,
    });
    gsap.to(fiveTextRef.current, {
      scrollTrigger: {
        trigger: fiveTextRef.current,
        scrub: true,
      },
      x: -40,
    });
    gsap.to(sixTextRef.current, {
      scrollTrigger: {
        trigger: sixTextRef.current,
        scrub: true,
      },
      x: -40,
    });
    gsap.to(sixTextRef.current, {
      scrollTrigger: {
        trigger: sixTextRef.current,
        scrub: true,
      },
      x: -40,
    });
    gsap.to(sevenTextRef.current, {
      scrollTrigger: {
        trigger: sevenTextRef.current,
        scrub: true,
      },
      x: 40,
    });
    gsap.to(eightTextRef.current, {
      scrollTrigger: {
        trigger: eightTextRef.current,
        scrub: true,
      },
      x: 40,
    });
    gsap.to(nineTextRef.current, {
      scrollTrigger: {
        trigger: nineTextRef.current,
        scrub: true,
      },
      x: 40,
    });
    gsap.to(tenTextRef.current, {
      scrollTrigger: {
        trigger: tenTextRef.current,
        scrub: true,
      },
      x: -40,
    });
    gsap.to(elevenTextRef.current, {
      scrollTrigger: {
        trigger: elevenTextRef.current,
        scrub: true,
      },
      x: -40,
    });
    gsap.to(tertinextRef.current, {
      scrollTrigger: {
        trigger: tertinextRef.current,
        scrub: true,
      },
      x: -40,
    });
  });

  useEffect(() => {
    const Yaxis = window.scrollY;
    console.log(Yaxis);
  });

  return (
    <>
      <section
        id="jumbotron"
        className="min-h-screen grid place-content-center  "
      >
        {/* <img
          className="absolute object-cover opacity-100 top-0 left-0 right-0 bottom-0 min-h-screen w-screen"
          src={GazaImage}
          alt={GazaImage}
        /> */}
        <div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className="relative m-auto my-3"
          >
            <h1 className="text-2xl  translate-y-[-2px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl  font-semibold sm:translate-x-1 ">
              RESISTANCE IN BLOOM
            </h1>
            <div className="w-[20px]  sm:w-[40px] shadow-sm shadow-slate-800 h-1 bg-white" />
            {/* <h1 className="absolute  text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl top-[-4px] font-semibold text-slate-50">
              RESISTANCE IN BLOOM
            </h1> */}
          </div>

          <div
            data-aos-mirror="true"
            data-aos="flip-down"
            data-aos-duration="1000"
            className="relative"
          >
            <h1 className="text-2xl translate-y-[-1px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-serif sm:translate-x-1  ">
              RESISTANCE IN BLOOM
            </h1>
            <div className="w-[20px] sm:w-[40px] shadow-sm shadow-slate-800 h-1 bg-white" />
            {/* <h1 className="absolute text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl top-[-3px] font-serif text-slate-50">
              RESISTANCE IN BLOOM
            </h1> */}
            <p
              data-aos-duration="2000"
              data-aos="flip-down"
              className="text-center text-[10px] sm:text-sm"
            >
              We are special edition.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[10px]">EST 2023</p>
              <p className="text-[10px]">CRETIVOX INTERNSHIP EXPERIENCE</p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative rotate-12 top-20">
        <div
          className={`grid grid-cols-3 gap-2 -rotate-6 p-2 overflow-hidden max-w-full w-screen place-content-center place-items-center ${
            isDarkMode
              ? "bg-black text-white duration-100  border-2"
              : "bg-white text-black duration-100 border=2"
          }`}
        >
          <h1
            ref={oneTextRef}
            className="text-xs   whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={twoTextRef}
            className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={threeTextRef}
            className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            SPECIAL EDITION
          </h1>
        </div>
        <div
          className={`grid grid-cols-3 gap-2 -rotate-6 p-2 overflow-hidden max-w-full w-screen place-content-center place-items-center ${
            isDarkMode
              ? "bg-white text-black duration-100"
              : "bg-black text-white duration-100"
          }`}
        >
          <h1
            ref={forTextRef}
            className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={fiveTextRef}
            className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={sixTextRef}
            className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            SPECIAL EDITION
          </h1>
        </div>
      </div>

      <div
        className={`grid grid-cols-3 gap-2 -rotate-6 p-2 overflow-hidden max-w-full w-screen place-content-center place-items-center ${
          isDarkMode
            ? "bg-white text-black duration-100"
            : "bg-black text-white duration-100"
        }`}
      >
        <h1
          ref={sevenTextRef}
          className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
        >
          SPECIAL EDITION
        </h1>
        <h1
          ref={eightTextRef}
          className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          SPECIAL EDITION
        </h1>
        <h1
          ref={nineTextRef}
          className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          SPECIAL EDITION
        </h1>
      </div>
      <div
        className={`grid grid-cols-3 gap-2 -rotate-6 p-2 overflow-hidden max-w-full w-screen place-content-center place-items-center ${
          isDarkMode
            ? "bg-black text-white duration-100"
            : "bg-white text-black duration-100"
        }`}
      >
        <h1
          ref={tenTextRef}
          className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
        >
          SPECIAL EDITION
        </h1>
        <h1
          ref={elevenTextRef}
          className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          SPECIAL EDITION
        </h1>
        <h1
          ref={tertinextRef}
          className="text-xs whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          SPECIAL EDITION
        </h1>
      </div>
    </>
  );
};

export default Jumbotron;
