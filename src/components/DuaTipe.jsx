import { Image } from "antd";
import TwoTypeImage from "../assets/image/twoTypeOne.jpg";
import { FaYoutube } from "react-icons/fa";

const DuaTipe = () => {
  return (
    <section className="min-h-screen grid place-content-center place-items-center my-32">
      <div className="w-screen max-w-[95vw] m-auto">
        <h1 className="text-center font-bold text-2xl my-3">Dua Tipe</h1>
        <Image className="rounded-lg" src={TwoTypeImage} alt={TwoTypeImage} />
        <p className="text-[10px] w-screen max-w-[90%] m-auto text-center mt-3">
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
