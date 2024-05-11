import { useEffect, useRef } from "react";
import ImageOne from "../assets/image/cipa.png";
import ImageTwo from "../assets/image/cipa.png";
import ImageThree from "../assets/image/cipa.png";
import ImageBatchSeOne from "../assets/image/batchse1.jpg";
import ImageBatchSeTwo from "../assets/image/batchse2.jpg";
import ImageBatchSeThree from "../assets/image/batchse3.jpg";
import ImageBatchSeFive from "../assets/image/batchse6.jpg";
import ImageBatchSeSeven from "../assets/image/batchse7.jpg";
import ImageBatchSeEight from "../assets/image/batchse8.jpg";
import ImageBatchSeNine from "../assets/image/batchse9.jpg";
import ImageBatchSeTen from "../assets/image/batchse10.jpg";
import ImageBatchSe11 from "../assets/image/batchse11.jpg";
import ImageBatchSe12 from "../assets/image/batchse12.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);
  const imageThreeRef = useRef(null);

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
        <div className="max-w-[400px]">
          <p className="text-[10px] ml-2 md:text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            optio hic minus ipsa sequi beatae voluptas aperiam recusandae
            adipisci fugiat, sed, enim, soluta aliquid voluptates fuga? Soluta
            explicabo possimus saepe.
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-[500px] gap-2">
          <img
            className="p-2 shadow-md  w-full h-full object-contain shadow-slate-600 rounded-lg"
            src={ImageBatchSeOne}
            alt=""
          />
          <img
            className="p-2 shadow-md w-[200px] h-[200px] object-cover aspect-square shadow-slate-600 rounded-lg"
            src={ImageBatchSeTwo}
            alt=""
          />
          <img
            className="p-2 shadow-md w-[200px] h-[200px] object-cover shadow-slate-600 rounded-lg"
            src={ImageBatchSeThree}
            alt=""
          />
        </div>
        <div className="grid grid-cols-3 max-w-[500px] gap-2">
          <img
            src={ImageBatchSeFive}
            className="p-2 shadow-md w-[200px] h-[200px] object-cover shadow-slate-600 rounded-lg"
            alt=""
          />
          <img
            className="p-2 w-[200px] h-[200px] object-cover shadow-md shadow-slate-600 rounded-lg"
            src={ImageBatchSeSeven}
            alt=""
          />
          <img
            className="p-2 shadow-md w-[200px] h-[200px] object-cover shadow-slate-600 rounded-lg"
            src={ImageBatchSeEight}
            alt=""
          />
        </div>
        <div className="max-w-[400px]">
          <p className="text-[10px] mr-2 md:text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            optio hic minus ipsa sequi beatae voluptas aperiam recusandae
            adipisci fugiat, sed, enim, soluta aliquid voluptates fuga? Soluta
            explicabo possimus saepe.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 w-screen max-w-[95vw] m-auto container ">
        <img
          className="w-full h-full  rounded-lg object-cover   "
          src={ImageBatchSe11}
          alt={ImageBatchSe11}
        />
        <img
          className="w-full h-full  rounded-lg  object-cover  "
          src={ImageBatchSe12}
          alt={ImageBatchSe12}
        />
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center w-screen min-h-screen">
        <div className="max-w-[150px] md:max-w-[500px] ">
          <p className="text-[8px] md:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            repellendus aspernatur nesciunt sit explicabo, velit pariatur rem
            incidunt fugiat fugit earum consequatur quos necessitatibus
            distinctio, sapiente doloremque et voluptatum neque? lorem lorem
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-[500px] gap-3">
          <img src={ImageOne} alt="" />
          <img src={ImageOne} alt="" />
          <img src={ImageOne} alt="" />
          <img src={ImageOne} alt="" />
          <img src={ImageOne} alt="" />
          <img src={ImageOne} alt="" />
        </div>
      </div>
    </>
  );
};

export default Story;
