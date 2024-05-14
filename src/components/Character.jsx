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

import { Carousel } from "antd";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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
      <h1 className="text-center  whitespace-nowrap my-10 lg:mt-32  font-bold text-xl">
        CHOOSE YOUR CHARACTER
      </h1>
      <div className="hidden md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto   object-cover aspect-square  shadow-sm shadow-slate-600"
            src={Iqi}
            alt={Iqi}
          />
          <div className="absolute grid top-0 bottom-0 left-0 right-0 place-content-center bg-black/40">
            <h1 className="font-bold text-white">Muhammad Rifqi Zafran</h1>
            <p className="text-xs text-center text-white">
              Intern Grapich Design
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Duleh}
            alt={Iqi}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">Nurul Fadilah</h1>
            <p className="text-xs text-center text-white">
              Intern Video Production
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={Samson}
            alt={Samson}
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Arrizky Putra Ramadhan
            </h1>
            <p className="text-xs text-center text-white">Intern CopyWriter</p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Cipa}
            alt={Cipa}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">Aurelia Syifa</h1>
            <h1 className="text-xs text-white">Intern Content Creator</h1>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Nadiras}
            alt={Nadiras}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">Nadira Refiana</h1>
            <p className="text-xs text-white">Intern Content Creator</p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Dinda}
            alt={Dinda}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-white">Dinda Saddono</h1>
            <p className="text-xs text-center text-white">Intern CopyWritter</p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Daffa}
            alt={Daffa}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">Daffa Otot</h1>
            <p className="text-center text-xs text-white">
              Intern KOL Specialis
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
            src={Kenny}
            alt={Kenny}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Kenny Kotambunan
            </h1>
            <p className="text-center text-xs text-white">
              Intern KOL Specialis
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Kibil}
            alt={Kibil}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">Kibil</h1>
            <p className="text-xs text-white">Intern Graphic Design</p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
            src={Opal}
            alt={Opal}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Mochamad Naufal Aufa Rifqi
            </h1>
            <p className="text-xs text-center text-white">
              Intern Front End Developer Hehe
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Valez}
            alt={Valez}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Valezka Enguine
            </h1>
            <p className="text-xs text-white">Intern Content Creator</p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Daffiz}
            alt={Daffiz}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-white">Muhammad Naufal Hadafiz</h1>
            <p className="text-xs text-center text-white">
              Intern Video Production
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Fawwaz}
            alt={Fawwaz}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center place-items-center bg-black/40">
            <h1 className="font-bold text-white">Muhammad Fawwaz Wijaya</h1>
            <p className="text-xs text-center text-white">
              Intern Video Editor
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen m-auto grid sm:hidden md:hidden lg:hidden ">
        <Carousel
          className="w-screen m-auto grid sm:hidden md:hidden lg:hidden "
          autoplay
          autoplaySpeed={900}
          infinite={true}
        >
          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto   object-cover aspect-square  shadow-sm shadow-slate-600"
              src={Iqi}
              alt={Iqi}
            />
            <div className="absolute grid top-0 bottom-0 left-0 right-0 place-content-center bg-black/40">
              <h1 className="font-bold text-white">Muhammad Rifqi Zafran</h1>
              <p className="text-xs text-center text-white">
                Intern Grapich Design
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Duleh}
              alt={Iqi}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Nurul Fadilah
              </h1>
              <p className="text-xs text-center text-white">
                Intern Video Production
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={Samson}
              alt={Samson}
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Arrizky Putra Ramadhan
              </h1>
              <p className="text-xs text-center text-white">
                Intern CopyWriter
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Cipa}
              alt={Cipa}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Aurelia Syifa
              </h1>
              <h1 className="text-xs text-white">Intern Content Creator</h1>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Nadiras}
              alt={Nadiras}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Nadira Refiana
              </h1>
              <p className="text-xs text-white">Intern Content Creator</p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Dinda}
              alt={Dinda}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-white">Dinda Saddono</h1>
              <p className="text-xs text-center text-white">
                Intern CopyWritter
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Daffa}
              alt={Daffa}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">Daffa Otot</h1>
              <p className="text-center text-xs text-white">
                Intern KOL Specialis
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
              src={Kenny}
              alt={Kenny}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Kenny Kotambunan
              </h1>
              <p className="text-center text-xs text-white">
                Intern KOL Specialis
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Kibil}
              alt={Kibil}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">Kibil</h1>
              <p className="text-xs text-white">Intern Graphic Design</p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
              src={Opal}
              alt={Opal}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Mochamad Naufal Aufa Rifqi
              </h1>
              <p className="text-xs text-center text-white">
                Intern Front End Developer Hehe
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Valez}
              alt={Valez}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Valezka Enguine
              </h1>
              <p className="text-xs text-white">Intern Content Creator</p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Daffiz}
              alt={Daffiz}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-white">Muhammad Naufal Hadafiz</h1>
              <p className="text-xs text-center text-white">
                Intern Video Production
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Fawwaz}
              alt={Fawwaz}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center place-items-center bg-black/40">
              <h1 className="font-bold text-white">Muhammad Fawwaz Wijaya</h1>
              <p className="text-xs text-center text-white">
                Intern Video Editor
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Character;
