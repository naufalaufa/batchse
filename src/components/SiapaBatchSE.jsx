import { Image } from "antd";
import SiapaImage from "../assets/image/siapaImageOne.jpg";

const SiapaBatchSE = () => {
  return (
    <>
      <section className="grid min-h-screen place-content-center place-items-center ">
        <h1 className="my-5 font-bold text-2xl">Siapa</h1>
        <div className="w-screen max-w-[95vw] m-auto">
          <Image className="rounded-lg" src={SiapaImage} alt={SiapaImage} />
          <p className="text-[10px] my-5 max-w-[90%] m-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            excepturi iste fugit corrupti qui fuga non voluptates doloribus
            molestias voluptate provident reprehenderit minima, labore aliquam
            aliquid optio laboriosam impedit voluptatum. lorem
          </p>
        </div>
      </section>
    </>
  );
};

export default SiapaBatchSE;
