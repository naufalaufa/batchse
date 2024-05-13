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
          <p className="text-[10px] ml-2 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            laboriosam deserunt facere at, quasi hic. Ratione eveniet eaque,
            neque a dicta delectus rem sapiente in nulla, id, illo provident
            earum?
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
          <p className="text-[10px] mr-2 md:text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            optio hic minus ipsa sequi beatae voluptas aperiam recusandae
            adipisci fugiat, sed, enim, soluta aliquid voluptates fuga? Soluta
            explicabo possimus saepe.
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
      <div className="w-full">
        <p className="text-[10px] text-center md:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          laudantium nostrum dolore debitis repellendus officiis dolores sequi,
          ut dicta consequatur nulla mollitia! Esse quaerat cum quia natus
          maiores reprehenderit quisquam!
        </p>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center w-screen min-h-screen">
        <div className="max-w-[150px] md:max-w-[500px] ">
          <p className="text-[8px]  md:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            repellendus aspernatur nesciunt sit explicabo, velit pariatur rem
            incidunt fugiat fugit earum consequatur quos necessitatibus
            distinctio, sapiente doloremque et voluptatum neque? lorem lorem
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            assumenda, aspernatur eius quis dignissimos deleniti! Ex adipisci at
            error ipsa quaerat in, dolore aperiam minima laborum maxime
            dignissimos. Beatae, nam.
          </p>
        </div>
      </div>
      <p className="text-[8px] my-8 sm:text-sm sm:m-auto  max-w-[800px] text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        voluptatibus perferendis libero iure, eius dolorem fugiat omnis odit
        accusamus quod! Fuga, molestiae blanditiis! Ullam quibusdam doloremque
        maiores saepe eos voluptatem.
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
      </div>
      <p className="text-[8px] my-8 sm:text-sm text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minus voluptate, nam, nihil consequuntur sequi itaque at magni labore
        fuga magnam dignissimos quaerat. Cupiditate quam fugiat repudiandae quae
        nam blanditiis.
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          nulla, assumenda quidem qui adipisci nobis accusantium quaerat!
          Commodi dicta, reprehenderit asperiores voluptatibus eaque,
          repellendus saepe ipsum eius dolorum modi temporibus.
        </p>
      </div>
    </>
  );
};

export default Story;
