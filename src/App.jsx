import About from "./components/About";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import Character from "./components/Character";
import Story from "./components/Story";
import Footer from "./components/Footer";
import CompangCamping from "./components/CompangCamping";
import Farewell from "./components/Farewell";
import TextAnimation from "./components/TextAnimation";
import DuaTipeAnimation from "./components/DuaTipeAnimation";
import ParalaxText from "./components/ParalaxText";
import AnimationinFixed from "./components/AnimationinFixed";
import Flower from "./components/Flower";
import { IoFlowerSharp } from "react-icons/io5";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
AOS.init();

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const roundedRef = useRef(null);
  const roundedRefTwo = useRef(null);
  const roundedRefThree = useRef(null);
  useEffect(() => {
    gsap.to(roundedRef.current, {
      scrollTrigger: {
        trigger: roundedRef.current,
        scrub: 1,
      },
      width: "90vw",
      height: "7px",
      borderRadius: "50%",
    });
    gsap.to(roundedRefTwo.current, {
      scrollTrigger: {
        trigger: roundedRefTwo.current,
        scrub: 1,
      },
      width: "90vw",
      height: "7px",
      borderRadius: "50%",
    });
    gsap.to(roundedRefThree.current, {
      scrollTrigger: {
        trigger: roundedRefThree.current,
        scrub: 1,
      },
      width: "90vw",
      height: "7px",
      borderRadius: "50%",
    });
  });
  return (
    <>
      <div className="bg-black text-white overflow-hidden">
        <Navbar />
        <Jumbotron />
        <About />
        <div
          ref={roundedRef}
          className="bg-white w-[10px] m-auto h-[4px] rounded-lg "
        ></div>
        <div className="bg-white sticky  top-[80vh] left-3 mt-3 right-0 grid place-content-center place-items-center w-[90px] h-[90px] rounded-full">
          <p className="text-black">
            <IoFlowerSharp className="text-yellow-400" size={50} />
          </p>
        </div>

        <Story />
        <CompangCamping />
        <div
          ref={roundedRefTwo}
          className="bg-white w-[10px] m-auto h-[4px] rounded-lg "
        ></div>
        <DuaTipeAnimation />
        <div
          ref={roundedRefThree}
          className="bg-white w-[10px] m-auto h-[4px] rounded-lg "
        ></div>
        <TextAnimation />
        <AnimationinFixed />
        <ParalaxText />
        <Farewell />
        <Sidebar />
        <Flower />
        <Character />
        <Footer />
      </div>
    </>
  );
};

export default App;
