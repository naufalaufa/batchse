import { Image } from "antd";
import SiapaImage from "../assets/image/siapaImageOne.jpg";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SiapaBatchSE = () => {
  const SiapaContainerRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(SiapaContainerRef.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: SiapaContainerRef.current,
      },
      scale: 1.1,
      opacity: 1,
      skewY: -4,
    });
  });

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid min-h-screen place-content-center my-32 place-items-center "
      >
        <h1 className="my-9 font-bold text-2xl  ">Siapa?</h1>
        <div>
          <div ref={SiapaContainerRef} className="w-screen max-w-[85vw] m-auto">
            <Image className="rounded-lg" src={SiapaImage} alt={SiapaImage} />
          </div>
          <p
            data-aos="fade-up"
            className="text-[10px] my-5 max-w-[90%] m-auto text-center sm:text-sm mt-20"
          >
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
          <a
            href=""
            target="_blank"
            className="flex items-center w-[150px] p-2 rounded-lg justify-center gap-3 m-auto my-5 bg-red-600 text-white hover:bg-black hover:border duration-75 hover:text-white"
          >
            <p>Youtube</p>
            <span>
              <FaYoutube />
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default SiapaBatchSE;
