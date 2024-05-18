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
AOS.init();

const App = () => {
  return (
    <>
      <div className="bg-black text-white overflow-hidden">
        <Navbar />
        <Jumbotron />
        <About />
        <Story />
        <CompangCamping />
        <DuaTipeAnimation />
        <TextAnimation />
        <AnimationinFixed />
        <ParalaxText />
        <Farewell />
        <Sidebar />
        <Character />
        <Footer />
      </div>
    </>
  );
};

export default App;
