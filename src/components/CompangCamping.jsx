import { Image } from "antd";
import CompangCampingImageTwo from "../assets/image/campings.jpg";
import CompangCampingImageOne from "../assets/image/compangCamping.jpg";

const CompangCamping = () => {
  return (
    <>
      <div className="w-full min-h-screen grid place-items-center place-content-center my-32">
        <h1 className="text-2xl text-center font-bold my-4">Compang Camping</h1>
        <div className="grid grid-cols-2 gap-3 place-items-center place-content-center">
          <Image
            className=" h-full max-h-[600px]  aspect-square object-cover rounded-lg"
            src={CompangCampingImageTwo}
            alt={CompangCampingImageTwo}
          />
          <Image
            className="h-full max-h-[600px]  aspect-square object-cover rounded-lg"
            src={CompangCampingImageOne}
            alt={CompangCampingImageOne}
          />
        </div>
        <p className="w-full max-w-[400px] m-auto text-[10px] text-center my-3 sm:text-sm md:whitespace-nowrap md:max-w-[600px] ">
          Camping sambil ujan-ujanan? Ini dia serunya compang camping Cretivox!
        </p>
        <p className="w-full max-w-[350px] m-auto text-[10px] text-center sm:text-sm sm:max-w-[700px] ">
          Dari hari pertama masuk magang di Cretivox lo akan selalu merasa
          kantor ini seru banget karena menanamkan work life balance. Bayangin
          aja, baru sebulan magang aja kita dibuatin compang camping dan pas
          camping juga banyak hal menegangkan dan seru yang terjadi sampai
          akhirnya Batch S.E bisa deket sama semua anak kantor.
        </p>
      </div>
    </>
  );
};

export default CompangCamping;
