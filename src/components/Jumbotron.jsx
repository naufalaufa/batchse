import gsap from "gsap";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BatchSeImageJumbotrom from "../assets/image/seFlowerHd.jpg";
import PropTypes from "prop-types";
import CBNlogo from "../assets/image/cbn.png";
gsap.registerPlugin(ScrollTrigger);

const Jumbotron = ({ isDarkMode }) => {
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
  const whiteToBlack = useRef(null);
  const whiteToBlackTwo = useRef(null);
  const whiteToBlackThree = useRef(null);
  const whiteToBlackFor = useRef(null);
  const whiteToBlackFive = useRef(null);
  const whiteToBlackSix = useRef(null);
  const whiteToBlackSeven = useRef(null);
  const whiteToBlackEight = useRef(null);
  const whiteToBlackNine = useRef(null);
  const whiteToBlackTen = useRef(null);
  const whiteToBlackEleven = useRef(null);
  const whiteToBlackForTen = useRef(null);
  const whiteToBlackNineTeen = useRef(null);
  const whiteToBlackTweenTen = useRef(null);
  const whiteToBlackEightTeen = useRef(null);
  const whiteToBlackSevenTeen = useRef(null);
  const RtoBlackAndWhite = useRef(null);
  const RtoBlackAndWhiteTwo = useRef(null);

  useEffect(() => {
    gsap.to(oneTextRef.current, {
      scrollTrigger: {
        trigger: oneTextRef.current,
        scrub: true,
      },
      x: 45,
    });
    gsap.to(twoTextRef.current, {
      scrollTrigger: {
        trigger: twoTextRef.current,
        scrub: true,
      },
      x: 45,
    });
    gsap.to(threeTextRef.current, {
      scrollTrigger: {
        trigger: threeTextRef.current,
        scrub: true,
      },
      x: 45,
    });
    gsap.to(forTextRef.current, {
      scrollTrigger: {
        trigger: forTextRef.current,
        scrub: true,
      },
      x: -45,
    });
    gsap.to(fiveTextRef.current, {
      scrollTrigger: {
        trigger: fiveTextRef.current,
        scrub: true,
      },
      x: -45,
    });
    gsap.to(sixTextRef.current, {
      scrollTrigger: {
        trigger: sixTextRef.current,
        scrub: true,
      },
      x: -45,
    });
    gsap.to(sixTextRef.current, {
      scrollTrigger: {
        trigger: sixTextRef.current,
        scrub: true,
      },
      x: -45,
    });
    gsap.to(sevenTextRef.current, {
      scrollTrigger: {
        trigger: sevenTextRef.current,
        scrub: true,
      },
      x: 45,
    });
    gsap.to(eightTextRef.current, {
      scrollTrigger: {
        trigger: eightTextRef.current,
        scrub: true,
      },
      x: 45,
    });
    gsap.to(nineTextRef.current, {
      scrollTrigger: {
        trigger: nineTextRef.current,
        scrub: true,
      },
      x: 45,
    });
    gsap.to(tenTextRef.current, {
      scrollTrigger: {
        trigger: tenTextRef.current,
        scrub: true,
      },
      x: -45,
    });
    gsap.to(elevenTextRef.current, {
      scrollTrigger: {
        trigger: elevenTextRef.current,
        scrub: true,
      },
      x: -45,
    });
    gsap.to(tertinextRef.current, {
      scrollTrigger: {
        trigger: tertinextRef.current,
        scrub: true,
      },
      x: -45,
    });
  });

  const textJumbotronAnimation = useRef(null);
  const textRJumbotronAnimation = useRef(null);
  const textJumbotronTwoAnimation = useRef(null);
  const textJumbotronOne = useRef(null);

  useEffect(() => {
    gsap.to(textJumbotronAnimation.current, {
      scrollTrigger: {
        trigger: textJumbotronAnimation.current,
        scrub: true,
      },
      scale: 0.8,
    });
  });

  useEffect(() => {
    gsap.to(textJumbotronOne.current, {
      scrollTrigger: {
        trigger: textJumbotronOne.current,
        scrub: true,
      },
      width: "100%",
      height: "100px",
    });
  }, []);

  useEffect(() => {
    gsap.to(textJumbotronTwoAnimation.current, {
      scrollTrigger: {
        trigger: textJumbotronTwoAnimation.current,
        scrub: true,
      },
      scale: 1,
      width: "30px",
      height: "30px",
      borderRadius: "50%",

      rotate: 10,
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    });
  }, []);

  useEffect(() => {
    gsap.to(textRJumbotronAnimation.current, {
      scrollTrigger: {
        trigger: textRJumbotronAnimation.current,
        scrub: true,
      },
      color: "yellow",
      scale: 1.2,
    });
    gsap.to(RtoBlackAndWhite.current, {
      scrollTrigger: {
        trigger: RtoBlackAndWhite.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackTwo.current, {
      scrollTrigger: {
        trigger: whiteToBlackTwo.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
    });
    gsap.to(whiteToBlackThree.current, {
      scrollTrigger: {
        trigger: whiteToBlackThree.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },

      color: "yellow",
      opacity: 1,
    });
    gsap.to(whiteToBlackFor.current, {
      scrollTrigger: {
        trigger: whiteToBlackFor.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackFive.current, {
      scrollTrigger: {
        trigger: whiteToBlackFive.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackSix.current, {
      scrollTrigger: {
        trigger: whiteToBlackSix.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackSeven.current, {
      scrollTrigger: {
        trigger: whiteToBlackSeven.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackEight.current, {
      scrollTrigger: {
        trigger: whiteToBlackEight.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackNine.current, {
      scrollTrigger: {
        trigger: whiteToBlackNine.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackTen.current, {
      scrollTrigger: {
        trigger: whiteToBlackTen.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackEleven.current, {
      scrollTrigger: {
        trigger: whiteToBlackEleven.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackTweenTen.current, {
      scrollTrigger: {
        trigger: whiteToBlackTweenTen.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackForTen.current, {
      scrollTrigger: {
        trigger: whiteToBlackForTen.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackNineTeen.current, {
      scrollTrigger: {
        trigger: whiteToBlackNineTeen.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackEightTeen.current, {
      scrollTrigger: {
        trigger: whiteToBlackEightTeen.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(whiteToBlackSevenTeen.current, {
      scrollTrigger: {
        trigger: whiteToBlackSevenTeen.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(RtoBlackAndWhiteTwo.current, {
      scrollTrigger: {
        trigger: RtoBlackAndWhiteTwo.current,
        scrub: true,
        start: "top 30%",
        end: "center 20%",
      },
      color: "yellow",
      opacity: 1,

      scale: 1.2,
    });
  });

  return (
    <>
      <section
        id="jumbotron"
        className="min-h-screen grid place-content-center relative  "
      >
        <div className="relative">
          <img
            ref={textJumbotronAnimation}
            className="object-cover  opacity-100 h-full sm:h-[90vh]  min-h-screen w-screen bg-center"
            src={BatchSeImageJumbotrom}
            alt={BatchSeImageJumbotrom}
          />
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center place-items-center bg-black/55">
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className=" m-auto my-3"
          >
            <img
              className="w-full  h-full object-contain max-w-[150px] max-h-[150px]"
              src={CBNlogo}
              alt={CBNlogo}
            />
          </div>
          <div
            ref={textJumbotronOne}
            className="min-h-screen grid place-content-center absolute top-0 left-0 right-0 bottom-0  w-screen place-items-center bg-black/45 "
          ></div>

          <div
            data-aos-mirror="true"
            data-aos="flip-down"
            data-aos-duration="1000"
            className="relative"
          >
            <h1
              ref={textJumbotronAnimation}
              className="text-2xl  translate-y-[-1px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-serif sm:translate-x-1 text-center "
            >
              <span className=" text-white " ref={RtoBlackAndWhiteTwo}>
                R
              </span>
              <span ref={RtoBlackAndWhite} className="text-white">
                E
              </span>
              <span ref={whiteToBlackTwo} className="text-white">
                S
              </span>
              <span ref={whiteToBlackThree} className="text-white">
                I
              </span>
              <span ref={whiteToBlackFor} className="text-white">
                S
              </span>
              <span ref={whiteToBlackFive} className="text-white">
                T
              </span>
              <span ref={whiteToBlackSix} className="text-white">
                A
              </span>
              <span ref={whiteToBlackSeven} className="text-white">
                N
              </span>
              <span ref={whiteToBlackEight} className="text-white">
                C
              </span>
              <span ref={whiteToBlackNine} className="text-white">
                E
              </span>
              <span ref={whiteToBlack} className="text-white">
                {" "}
              </span>
              <span ref={whiteToBlackTen} className="text-white">
                I
              </span>
              <span ref={whiteToBlackEleven} className="text-white">
                N
              </span>
              <span> </span>
              <span ref={whiteToBlackTweenTen} className="text-white">
                B
              </span>
              <span ref={whiteToBlackForTen} className="text-white">
                L
              </span>
              <span ref={whiteToBlackNineTeen} className="text-white">
                O
              </span>
              <span ref={whiteToBlackEightTeen} className="text-white">
                O
              </span>
              <span ref={whiteToBlackSevenTeen} className="text-white">
                M
              </span>
            </h1>
            <div className="flex gap-1 sm:gap-3 justify-center items-center max-w-[200px] m-auto">
              <p className="text-[8px] whitespace-nowrap">
                Muhammad Rifqi Zafran
              </p>
              <p className="text-[8px] whitespace-nowrap">Nurul Fadilah</p>
              <p className="text-[8px] whitespace-nowrap">
                Arrizky Putra Ramadhan
              </p>
              <p className="text-[8px] whitespace-nowrap">
                Aurelia Syifa Indrayana
              </p>
            </div>
            <div className="flex gap-1 sm:gap-3 my-1 justify-center items-center">
              <p className="text-[8px]">Nadira Refiana</p>
              <p className="text-[8px]">Dinda Saddono</p>
              <p className="text-[8px]">Kenny Bianco Kotambunan</p>
              <p className="text-[8px]">Nabila Nada Azizah</p>
            </div>
            <div className="flex gap-1 sm:gap-3 my-1 justify-center items-center">
              <p className="text-[8px] whitespace-nowrap">
                Muhammad Naufal Hadafiz
              </p>
              <p className="text-[8px] whitespace-nowrap">
                Muhammad Fawwaz Wijaya
              </p>
              <p className="text-[8px] whitespace-nowrap">Valezka Eugenie</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-[8px] whitespace-nowrap text-center">
                Muhammad Daffa Syabana Tiandi
              </p>
              <p className="text-[8px] whitespace-nowrap text-center">
                Mochamad Naufal Aufa Rifqi
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative rotate-12 top-32 mt-89">
        <div
          className={`grid grid-cols-3 gap-2 -rotate-6 p-2 overflow-hidden max-w-full w-screen place-content-center place-items-center ${
            isDarkMode
              ? "bg-black text-white duration-100  border-2"
              : "bg-white text-black duration-100 border=2"
          }`}
        >
          <h1
            ref={oneTextRef}
            className="text-[10px]   whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={twoTextRef}
            className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={threeTextRef}
            className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
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
            className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={fiveTextRef}
            className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            SPECIAL EDITION
          </h1>
          <h1
            ref={sixTextRef}
            className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
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
          className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
        >
          SPECIAL EDITION
        </h1>
        <h1
          ref={eightTextRef}
          className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          SPECIAL EDITION
        </h1>
        <h1
          ref={nineTextRef}
          className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
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
          className="text-[10px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold"
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

Jumbotron.propTypes = {
  isDarkMode: PropTypes.any,
};

export default Jumbotron;
