import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import VideoTimeLapse from "../../public/0517(1).mp4";
import SkateImage from "../assets/image/skate.jpg";
import AwanNih from "../assets/image/awanNih.jpg";
import Dimobil from "../assets/image/dimobil.jpg";
import DiProduction from "../assets/image/diProduction.jpg";
import DitanggaSEnih from "../assets/image/ditanggaNihSE.jpg";
import AnjaySEnih from "../assets/image/anjaysenih.jpg";
import SectionPhoto from "../assets/image/batchse1.jpg";
import SectionPhotoTownhall from "../assets/image/seInTownhall.jpg";
import SeInCoffeShop from "../assets/image/seInCoffeShop.jpg";
import { Image } from "antd";

gsap.registerPlugin(ScrollTrigger);
const ParalaxText = () => {
  const videoAnimationRef = useRef(null);

  return (
    <>
      <h1 className="text-xl font-bold text-center mt-52 mb-4">Core Memory</h1>
      <section className=" md:grid md:grid-cols-2  relative   gap-5  p-4  grid place-content-center m-auto place-items-center">
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
        <div className="grid grid-cols-3  gap-4 max-w-[500px] ">
          <Image
            className="w-[100px] h-[100px]   aspect-square object-cover rounded-xl rotate-12"
            src={SkateImage}
            alt={SkateImage}
          />
          <Image
            className="w-[100px]  h-[100px]  lg:w-[150px] lg:h-[150px]  aspect-square object-cover rounded-xl rotate-12"
            src={AwanNih}
            alt={AwanNih}
          />
          <Image
            className="w-[100px]  h-[100px]   lg:w-[150px] lg:h-[150px] aspect-square object-cover rounded-xl rotate-12"
            src={Dimobil}
            alt={Dimobil}
          />
          <Image
            className="w-[100px]  h-[100px] lg:w-[150px] lg:h-[150px]  aspect-square object-cover rounded-xl rotate-12"
            src={AnjaySEnih}
            alt={AnjaySEnih}
          />
          <Image
            className="w-[100px]  h-[100px]   lg:w-[150px] lg:h-[150px]  aspect-square object-cover rounded-xl rotate-12"
            src={DiProduction}
            alt={DiProduction}
          />
          <Image
            className="w-[100px]  h-[100px]  lg:w-[150px] lg:h-[150px]  aspect-square object-cover rounded-xl rotate-12"
            src={DitanggaSEnih}
            alt={DitanggaSEnih}
          />
          <Image
            className="w-[100px]  h-[100px]  lg:w-[150px] lg:h-[150px]  aspect-square object-cover rounded-xl rotate-12"
            src={SectionPhotoTownhall}
            alt={SectionPhotoTownhall}
          />
          <Image
            className="w-[100px]  h-[100px]   lg:w-[150px] lg:h-[150px] aspect-square object-cover rounded-xl rotate-12"
            src={SeInCoffeShop}
            alt={SeInCoffeShop}
          />
          <Image
            className="w-[100px]  h-[100px]  lg:w-[150px] lg:h-[150px]  aspect-square object-cover rounded-xl rotate-12"
            src={SectionPhoto}
            alt={SectionPhoto}
          />
        </div>
        <div className="bg-black/10 grid place-content-center absolute top-[35%] sm:bottom-[-120px] lg:absolute lg:bottom-[-250px] rounded-lg sm:absolute h-[100px] w-screen max-w-[90vw] p-2 m-auto">
          <p className="text-[10px] mt-40 text-center sm:text-sm ">
            Meskipun raga sudah tak bersama, tapi cerita kita akan selalu ada
            didalam kepala, karena teman hanya ada dua, teman pada masanya, dan
            teman selamanya..S.E Signing Out
          </p>
        </div>
      </section>
    </>
  );
};

export default ParalaxText;
