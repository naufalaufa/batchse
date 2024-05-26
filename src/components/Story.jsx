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
import KotoKepala from "../assets/image/hehekepala.jpg";
import Bejejer from "../assets/image/bejejer.png";
import RevealDumpOne from "../assets/image/dumpReveal.jpg";
import RevealDumpTwo from "../assets/image/dumpReveal2.jpg";
import dinnerBlockM from "../assets/image/dinnerBlockM.jpg";
import anjaySelfi from "../assets/image/anjaySefi.jpg";
import firstMagangOne from "../assets/image/fisrtMagang.jpg";
import firstMagangTwo from "../assets/image/firstMagangTwo.jpg";
import firstMagangThree from "../assets/image/firstMagangThree.jpg";
import warnet from "../assets/image/warnet.jpg";
import blockMHehe from "../assets/image/blokMhehe.jpg";
import gurlBlockM from "../assets/image/gurlBlokM.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Image } from "antd";
import Loading from "./Loading";

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
      <div
        id="storyimage"
        className="grid min-h-screen place-items-center place-content-center gap-5 grid-cols-2"
      >
        <div data-aos="fade-up" className="max-w-[400px]">
          <p className="text-[10px] ml-2 md:text-xl font-bold">
            Penutup Sekaligus Pembuka
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duratio="1000"
          className="grid mt-12 grid-cols-1 md:grid md:grid-cols-3 max-w-[500px] gap-2"
        >
          <Image
            loading={<Loading />}
            className=" object-cover aspect-square"
            src={ImageBatchSeOne}
            alt={ImageBatchSeOne}
          />
          <Image
            loading={<Loading />}
            height={"100%"}
            className="object-cover aspect-square"
            src={ImageBatchSeTwo}
            alt={ImageBatchSeTwo}
          />
          <Image
            loading={<Loading />}
            height={"100%"}
            className="object-cover aspect-square"
            src={ImageBatchSeThree}
            alt={ImageBatchSeThree}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 md:grid md:grid-cols-3 max-w-[500px] gap-2"
        >
          <Image
            loading={<Loading />}
            height={"100%"}
            className="aspect-square object-cover"
            src={ImageBatchSeFive}
            alt={ImageBatchSeFive}
          />
          <Image
            loading={<Loading />}
            className="aspect-square object-cover"
            src={ImageBatchSeSeven}
            alt={ImageBatchSeSeven}
          />
          <Image
            loading={<Loading />}
            className="aspect-square object-cover"
            src={ImageBatchSeEight}
            alt={ImageBatchSeEight}
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
          loading={<Loading />}
          height={"100%"}
          className=" object-cover w-full rounded-lg "
          src={BatchSEPosterOne}
          alt={ImageBatchSe11}
        />
        <Image
          loading={<Loading />}
          height={"100%"}
          className=" object-cover w-full rounded-lg "
          src={BatchSEPosterTwo}
          alt={ImageBatchSe12}
        />
        <div className="flex absolute top-0 left-0 right-0 justify-evenly">
          <img
            loading={<Loading />}
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full"
            src={LogoSEone}
            alt={LogoSEone}
          />
          <img
            loading={<Loading />}
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full"
            src={LogoSETwo}
            alt={LogoSETwo}
          />
        </div>
      </div>
      <div className="w-full max-w-[95vw] m-auto">
        <p className="text-[10px] text-center md:text-sm">
          Halo Vox! Batch S.E nih senggol dong. Lo harus liat keseruan kita sih,
          biar gak ragu lagi buat daftar magang di Cretivox. Magang disini beda
          banget, disini lo bakal ngerasain momen magang paling seru yang bakal
          selalu lo inget sepanjang hidup lo! Dengan kata suka cita dan
          keceriaan yang meluap, Lima bulan petualangan yang penuh warna udah
          kita laluin bersama, merangkai kenangan-kenangan yang tak terlupakan
          seiring berjalannya waktu. Dari setiap tawa hingga tetes air mata yang
          mengalir, kita telah mengukir kisah persahabatan yang menghangatkan
          hati dan menginspirasi layaknya sebuah keluarga.
        </p>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center w-screen min-h-screen">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[150px] md:max-w-[500px] "
        >
          <p className="text-[8px]  md:text-sm">
            Kisah kita bukanlah hanya sekedar pekerjaan, tetapi juga tentang
            perjalanan emosional dan rohaniah yang telah mengubah kita menjadi
            pahlawan.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-duration="1000"
          className="grid grid-cols-3 max-w-[500px] gap-3 my-20"
        >
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageOne}
            alt={SectionStoryImageOne}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageTwo}
            alt={SectionStoryImageTwo}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageThree}
            alt={SectionStoryImageThree}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageFor}
            alt={SectionStoryImageFor}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={UltahKennyImage}
            alt={UltahKennyImage}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={ZeinRoomImage}
            alt={ZeinRoomImage}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-3 my-11 max-w-[500px] gap-3"
        >
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={firstMagangOne}
            alt={SectionStoryImageOne}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={firstMagangTwo}
            alt={SectionStoryImageTwo}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={firstMagangThree}
            alt={SectionStoryImageThree}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={SectionStoryImageFor}
            alt={SectionStoryImageFor}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={UltahKennyImage}
            alt={UltahKennyImage}
          />
          <Image
            loading={<Loading />}
            className="w-[200px] h-[200px] aspect-square object-cover"
            src={ZeinRoomImage}
            alt={ZeinRoomImage}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[150px] md:max-w-[500px]"
        >
          <p className="text-[8px] ml-2 md:text-sm">
            Dari setiap ujian yang kita hadapi, kita belajar tentang kekuatan
            persatuan dan ketahanan dalam menghadapi cobaan. Meski jalan ke
            depan mungkin membawa kita ke arah yang berbeda, tapi ikatan yang
            terjalin akan tetap menggugah kenangan manis dalam ingatan.
          </p>
        </div>
      </div>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[8px] my-8 sm:text-sm sm:m-auto  max-w-[800px] text-center"
      >
        Apa yang kita alami selama lima bulan ini adalah lebih dari sekadar
        petualangan, tapi juga kisah tentang persahabatan yang tumbuh dan
        berkembang layaknya film drama Hollywood.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-3 place-content-center place-items-center max-w-[90vw] m-auto gap-5 my-20"
      >
        <Image
          loading={<Loading />}
          className="aspect-square object-cover rounded-lg"
          src={FotoAwan}
          alt={FotoAwan}
        />
        <Image
          loading={<Loading />}
          className="aspect-square object-contain"
          src={ImageBatchSe11}
          alt={ImageBatchSe11}
        />
        <Image
          loading={<Loading />}
          className="aspect-square object-cover rounded-lg"
          src={KotoKepala}
          alt={KotoKepala}
        />
      </div>
      <p className="text-[8px] my-8 sm:text-sm text-center">
        Mari kita simpan setiap momen itu dalam album kenangan kita, sebagai
        bahan bakar inspirasi saat kita menatap masa depan dengan semangat yang
        tak terpadamkan,
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="columns-5 gap-4 my-20 p-3"
      >
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={Bejejer}
          alt={Bejejer}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={warnet}
          alt={warnet}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={dinnerBlockM}
          alt={dinnerBlockM}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={anjaySelfi}
          alt={anjaySelfi}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={RevealDumpOne}
          alt={RevealDumpOne}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={RevealDumpTwo}
          alt={RevealDumpTwo}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={blockMHehe}
          alt={blockMHehe}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={gurlBlockM}
          alt={gurlBlockM}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={ImageBatchSe12}
          alt={Bejejer}
        />
        <Image
          loading={<Loading />}
          className="rounded-md"
          src={Bejejer}
          alt={Bejejer}
        />
      </div>

      <div className="w-screen max-w-[90%] m-auto">
        <p className="text-[10px] text-center sm:text-sm">
          Suka dan Duka Dilalui Bersama, Bukan Sekedar Teman Kerja, Akan Tetapi
          Keluarga Yang Selalu Ada.
        </p>
      </div>
    </>
  );
};

export default Story;
