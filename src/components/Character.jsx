import Iqi from "../assets/image/iqi.png";
import Duleh from "../assets/image/dulleh.png";
import Samson from "../assets/image/samson.png";
import Cipa from "../assets/image/cipa.png";
import Nadiras from "../assets/image/nadira.png";
import Dinda from "../assets/image/dinda.png";
import Daffa from "../assets/image/dappa.png";
import Kenny from "../assets/image/kenny.png";
import Kibil from "../assets/image/kibil.png";
import Opal from "../assets/image/opal.png";
import Valez from "../assets/image/valez.png";
import Daffiz from "../assets/image/david.png";
import Fawwaz from "../assets/image/fawwaz.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Image } from "antd";

const Character = () => {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        pin: true,
        scrub: true,
      },
    });
  });

  return (
    <>
      <h1 className="text-center whitespace-nowrap my-12 font-bold text-xl">
        CHOSE YOUR CHARACTER
      </h1>
      <div className="grid min-h-screen place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2">
        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Iqi}
            alt={Iqi}
          />
          <div className="absolute grid top-0 bottom-0 left-0 right-0 place-content-center bg-black/40">
            <h1 className="font-bold">Muhammad Rifqi Zafran</h1>
            <p className="text-xs text-center">Intern Grapich Design</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Duleh}
            alt={Iqi}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Nurul Fadilah</h1>
            <p className="text-xs text-center">Intern Video Production</p>
          </div>
        </div>

        <div className="relative">
          <Image
            src={Samson}
            alt={Samson}
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Arrizky Putra Ramadhan</h1>
            <p className="text-xs text-center">Intern CopyWriter</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Cipa}
            alt={Cipa}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Aurelia Syifa</h1>
            <h1 className="text-xs">Intern Content Creator</h1>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Nadiras}
            alt={Nadiras}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Nadira Refiana</h1>
            <p className="text-xs">Intern Content Creator</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Dinda}
            alt={Dinda}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold">Dinda Saddono</h1>
            <p className="text-xs text-center">Intern CopyWritter</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Daffa}
            alt={Daffa}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Daffa Otot</h1>
            <p className="text-center text-xs">Intern KOL Specialis</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Kenny}
            alt={Kenny}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Kenny Kotambunan</h1>
            <p className="text-center text-xs">Intern KOL Specialis</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Kibil}
            alt={Kibil}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Kibil</h1>
            <p className="text-xs">Intern Graphic Design</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Opal}
            alt={Opal}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">
              Mochamad Naufal Aufa Rifqi
            </h1>
            <p className="text-xs text-center">
              Intern Front End Developer Hehe
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Valez}
            alt={Valez}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center">Valezka Enguine</h1>
            <p className="text-xs">Intern Content Creator</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Daffiz}
            alt={Daffiz}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold">Muhammad Naufal Hadafiz</h1>
            <p className="text-xs text-center">Intern Video Production</p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="border p-2 rounded-lg  shadow-sm shadow-slate-600"
            src={Fawwaz}
            alt={Fawwaz}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center place-items-center bg-black/40">
            <h1 className="font-bold">Muhammad Fawwaz Wijaya</h1>
            <p className="text-xs text-center">Intern Video Editor</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
