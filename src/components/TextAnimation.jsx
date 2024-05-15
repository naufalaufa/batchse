import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SiapaImage from "../assets/image/siapaImageOne.jpg";
import { FiYoutube } from "react-icons/fi";
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
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
      <section className="min-h-screen grid place-content-center place-items-center my-32">
        <div className=" w-screen m-auto">
          <h1 className="text-center font-bold my-3 text-3xl">Siapa ?</h1>
          <div className="bg-white  relative  min-h-[50vh] grid place-content-center rounded-lg">
            <img
              ref={textAnimationRef}
              src={SiapaImage}
              className="w-[450px] h-[450px] m-auto rounded-lg object-cover shadow-md "
            ></img>
            <div className="absolute grid  place-content-center place-items-center bg-black/20 top-0 bottom-0 left-0 right-0">
              <a
                href="http://youtube.com"
                target="_blank"
                ref={roundedAnimationRef}
                className="max-w-[500px]  grid place-content-center m-auto opacity-0 bg-red-500 shadow-lg cursor-pointer   w-[150px] h-[150px] rounded-full"
              >
                <FiYoutube size={40} />
              </a>
            </div>
          </div>
          <p className="text-white p-4 max-w-[800px] m-auto text-center text-[10px]">
            Nah ini dia momen jujur-jujuran di shooting video “SIAPA?”. Malam
            sebelum shooting video “SIAPA?” kita baru aja selesai shooting video
            hiring dan harus potong-potongin muka sendiri sebanyak 26 pieces per
            orang, sampe kita udah muak liat muka sendiri yang jelek banget.
            Pada akhirnya kita diberi 2 pilihan, yaitu waktu atau uang.
            Pilihannya meluangkan waktu untuk potong-potong sampai pagi, atau
            joki ke tukang fotocopy. At the end kita semua punya choices
            masing-masing. Sampai pada akhirnya kita shooting dan meskipun mata
            kurang tidur, badan kurang istirahat kita semua tetap semangat.
          </p>
        </div>
      </section>
    </>
  );
};

export default TextAnimation;
