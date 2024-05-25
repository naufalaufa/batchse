import ImageGif from "../assets/image/flower.gif";
import Poster from "../assets/image/poster.jpg";

const Flower = () => {
  return (
    <div className="min-h-screen grid grid-cols-1   bg-white p-8 place-content-center place-items-center rounded-lg">
      <img className="max-w-[90vw] rounded-lg " src={Poster} alt={ImageGif} />
    </div>
  );
};

export default Flower;
