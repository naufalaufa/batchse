import { useEffect, useRef } from "react";
import ImageBatchSeOne from "../assets/image/batchse1.jpg";
import ImageBatchSeTwo from "../assets/image/batchse2.jpg";
import ImageBatchSeThree from "../assets/image/batchse3.jpg";
import ImageBatchSeFive from "../assets/image/batchse6.jpg";
import ImageBatchSeSeven from "../assets/image/batchse7.jpg";
import ImageBatchSeEight from "../assets/image/batchse8.jpg";
import ImageBatchSe11 from "../assets/image/batchse11.jpg";
import ImageBatchSe12 from "../assets/image/batchse12.jpg";
import BatchSEPosterOne from "../assets/image/hehe.jpg";
import BatchSEPosterTwo from "../assets/image/huhu.jpg";
import LogoSEone from "../assets/image/logoBatchSE.jpg";
import LogoSETwo from "../assets/image/logoBatchSE2.jpg";
import SectionStoryImageOne from "../assets/image/batchSEdesOne.jpg";
import SectionStoryImageTwo from "../assets/image/batchSEdesTwo.jpg";
import SectionStoryImageThree from "../assets/image/batchSEinThree.jpg";
import SectionStoryImageFor from "../assets/image/batchSEfor.jpg";
import UltahKennyImage from "../assets/image/ultahKenny.jpg";
import ZeinRoomImage from "../assets/image/zeinRoom.jpg";
import FotoAwan from "../assets/image/fotoImageAwan.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Image } from "antd";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const imageOneRef = useRef(null);

  useEffect(() => {
    gsap.to(imageOneRef.current, {
      scrollTrigger: {
        trigger: imageOneRef.current,
        scrub: true,
      },
      x: 30,
    });
  });

  return (
    <>
      <div className="grid min-h-screen place-items-center place-content-center gap-5 grid-cols-2">
        <div data-aos="fade-right" className="max-w-[400px]">
          <p className="text-[10px] ml-2 md:text-xl font-bold">
            Penutup Sekaligus Pembuka
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="grid mt-12 grid-cols-1 md:grid md:grid-cols-3 max-w-[500px] gap-2"
        >
          <Image
            className=" object-cover aspect-square"
            src={ImageBatchSeOne}
            alt=""
          />
          <Image
            height={"100%"}
            className="object-cover aspect-square"
            src={ImageBatchSeTwo}
            alt=""
          />
          <Image
            height={"100%"}
            className="object-cover aspect-square"
            src={ImageBatchSeThree}
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          className="grid grid-cols-1 md:grid md:grid-cols-3 max-w-[500px] gap-2"
        >
          <Image
            height={"100%"}
            className="aspect-square object-cover"
            src={ImageBatchSeFive}
            alt=""
          />
          <Image
            className="aspect-square object-cover"
            src={ImageBatchSeSeven}
            alt=""
          />
          <Image
            className="aspect-square object-cover"
            src={ImageBatchSeEight}
            alt=""
          />
        </div>

        <div data-aos="fade-left" className="max-w-[400px] ">
          <p className="text-[10px] mr-2 md:text-xl text-center font-bold">
            Ini Dia Cerita Batch S.E ‘Resistance In Bloom’!
          </p>
        </div>
      </div>
      <div className="grid relative my-10 grid-cols-2 gap-3 w-screen max-w-[95vw] m-auto container  ">
        <Image
          height={"100%"}
          className=" object-cover w-full rounded-lg "
          src={BatchSEPosterOne}
          alt={ImageBatchSe11}
        />
        <Image
          height={"100%"}
          className=" object-cover w-full rounded-lg "
          src={BatchSEPosterTwo}
          alt={ImageBatchSe12}
        />
        <div className="flex absolute top-0 left-0 right-0 justify-evenly">
          <img
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full"
            src={LogoSEone}
            alt={LogoSEone}
          />
          <img
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full"
            src={LogoSETwo}
            alt={LogoSETwo}
          />
        </div>
      </div>
      <div className="w-full max-w-[95vw] m-auto">
        <p className="text-[10px] text-center md:text-sm">
          Setelah lima bulan menjelajahi kehidupan yang lebih bervariasi dari
          acara TV, bersama 13 gen-z dengan kepribadian yang beragam, sekarang
          kita sampai di babak baru. Dalam perjalanan ini, kita telah
          mengumpulkan kenangan yang lebih berwarna daripada palet cat lukisan,
          dari momen-momen kocak hingga saat-saat mengharukan yang membuat kita
          ingin menyeka air mata. Meskipun bayangan perpisahan melayang di
          udara, tapi kita telah tumbuh bersama dan siap untuk mengejar impian
          masing-masing.
        </p>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center w-screen min-h-screen">
        <div className="max-w-[150px] md:max-w-[500px] ">
          <p className="text-[8px]  md:text-sm">
            Kisah kita bukanlah hanya sekedar pekerjaan, tetapi juga tentang
            perjalanan emosional dan rohaniah yang telah mengubah kita menjadi
            pahlawan.
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-[500px] gap-3 my-20">
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageOne}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageTwo}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageThree}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageFor}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={UltahKennyImage}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={ZeinRoomImage}
            alt=""
          />
          {/* <Image src={ImageOne} alt="" />
          <Image src={ImageOne} alt="" /> */}
        </div>
        <div className="grid grid-cols-3 my-11 max-w-[500px] gap-3">
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageOne}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageTwo}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageThree}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageFor}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={UltahKennyImage}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={ZeinRoomImage}
            alt=""
          />
        </div>

        <div className="max-w-[150px] md:max-w-[500px]">
          <p className="text-[8px] ml-2 md:text-sm">
            Dari setiap ujian yang kita hadapi, kita belajar tentang kekuatan
            persatuan dan ketahanan dalam menghadapi cobaan. Meski jalan ke
            depan mungkin membawa kita ke arah yang berbeda, tapi ikatan yang
            terjalin akan tetap menggugah kenangan manis dalam ingatan.
          </p>
        </div>
      </div>
      <p className="text-[8px] my-8 sm:text-sm sm:m-auto  max-w-[800px] text-center">
        Apa yang kita alami selama lima bulan ini adalah lebih dari sekadar
        petualangan, tapi juga kisah tentang persahabatan yang tumbuh dan
        berkembang layaknya film drama Hollywood.
      </p>
      <div className="grid grid-cols-3 place-content-center place-items-center max-w-[90vw] m-auto gap-5 my-20">
        <Image
          className="aspect-square object-cover"
          src={FotoAwan}
          alt={FotoAwan}
        />
        <Image
          className="aspect-square object-contain"
          src={ImageBatchSe11}
          alt={ImageBatchSe11}
        />
        <Image
          className="aspect-square object-cover"
          src={FotoAwan}
          alt={FotoAwan}
        />
      </div>
      <p className="text-[8px] my-8 sm:text-sm text-center">
        Mari kita simpan setiap momen itu dalam album kenangan kita, sebagai
        bahan bakar inspirasi saat kita menatap masa depan dengan semangat yang
        tak terpadamkan,
      </p>
      <div className="grid grid-cols-5 gap-4 my-20">
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
        <Image src={ImageBatchSe11} alt={ImageBatchSe11} />
      </div>
      <div className="w-screen max-w-[90%] m-auto">
        <p className="text-[10px] text-center">
          Suka dan Duka Dilalui Bersama, Bukan Sekedar Teman Kerja, Akan Tetapi
          Keluarga Yang Selalu Ada.
        </p>
      </div>
    </>
  );
};

export default Story;
