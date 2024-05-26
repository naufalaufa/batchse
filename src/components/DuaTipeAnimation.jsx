import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import TwoTypeImage from "../assets/image/twoTypeOne.jpg";
import { FiYoutube } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const DuaTipeAnimation = () => {
  const textAnimationRef = useRef(null);
  const containerAnimationRef = useRef(null);
  const roundedAnimationRef = useRef(null);

  useEffect(() => {
    gsap.to(textAnimationRef.current, {
      scrollTrigger: {
        trigger: textAnimationRef.current,
        scrub: 1,
      },
      width: "100vw",
      height: "100%",
    });
    gsap.to(containerAnimationRef.current, {
      scrollTrigger: {
        trigger: containerAnimationRef.current,
        scrub: 1,
      },
      backgroundColor: "white",
      width: "90vw",
      height: "90vh",
    });
    gsap.to(roundedAnimationRef.current, {
      scrollTrigger: {
        trigger: roundedAnimationRef.current,
        scrub: 1,
      },
      opacity: 1,
      backgroundColor: "red",
      width: "100px",
      height: "100px",
    });
  });
  return (
    <>
      <section
        id="youtube"
        className="min-h-screen grid place-content-center place-items-center my-32"
      >
        <div className=" w-screen m-auto">
          <h1 className="text-center font-bold  my-3 text-3xl">Dua Tipe</h1>
          <div className="bg-white  relative  min-h-[50vh] grid place-content-center rounded-lg">
            <img
              ref={textAnimationRef}
              src={TwoTypeImage}
              className="w-[450px] h-[450px] m-auto rounded-lg object-cover shadow-md "
            />
            <div className="absolute grid  place-content-center place-items-center bg-black/20 top-0 bottom-0 left-0 right-0">
              <a
                href="https://youtu.be/oRzd4jv3Yto?si=5ypxGRrfCwCJsSmL"
                target="_blank"
                ref={roundedAnimationRef}
                className="max-w-[500px]  grid place-content-center m-auto opacity-0 bg-red-500 shadow-lg cursor-pointer   w-[150px] h-[150px] rounded-full"
              >
                <FiYoutube size={40} />
              </a>
            </div>
          </div>

          <p className="text-white  p-4 max-w-[800px] m-auto text-center text-[10px]">
            Nah ini “Dua Tipe” nyaa Batch S.E!! Dua Tipe ini peninggalan sebelum
            Batch S.E berpisah nih. Bertema tentang Perbedaan Generasi, Batch
            S.E mau nunjukin ke lo tentang perbedaan antar Generasi boomer sama
            Gen Z kaya kita sekarang ini!!
          </p>
        </div>
      </section>
    </>
  );
};

export default DuaTipeAnimation;
