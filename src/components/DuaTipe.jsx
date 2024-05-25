import { Image } from "antd";
import TwoTypeImage from "../assets/image/twoTypeOne.jpg";
import { FaYoutube } from "react-icons/fa";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const DuaTipe = () => {
  gsap.registerPlugin(ScrollTrigger);
  const DuaTipeContainerRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(DuaTipeContainerRef.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: DuaTipeContainerRef.current,
      },
      scale: 1.1,
      opacity: 1,
      skewY: 4,
    });

    ScrollTrigger.refresh();
  }, [tl]);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="min-h-screen grid place-content-center place-items-center my-32"
    >
      <div className="w-screen max-w-[85vw] m-auto">
        <h1 className="text-center font-bold text-2xl my-8">Dua Tipe</h1>
        <div ref={DuaTipeContainerRef}>
          <Image className="rounded-lg" src={TwoTypeImage} alt={TwoTypeImage} />
        </div>
        <p
          data-aos="fade-up"
          className="text-[10px] w-screen max-w-[90%] m-auto text-center mt-16 sm:text-sm"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          necessitatibus rem facere minus cum tenetur fuga, veniam quo fugit
          sapiente magnam quisquam voluptatibus sint, quas accusantium, atque
          harum iure natus?
        </p>
        <a
          href=""
          target="_blank"
          className="flex items-center hover:bg-black hover:border duration-75 w-[150px] p-2 rounded-lg justify-center gap-3 m-auto my-5 bg-red-600 text-white"
        >
          <p>Youtube</p>
          <span>
            <FaYoutube />
          </span>
        </a>
      </div>
    </section>
  );
};

export default DuaTipe;
