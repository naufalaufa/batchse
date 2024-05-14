import About from "./components/About";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import Character from "./components/Character";
import Story from "./components/Story";
import Footer from "./components/Footer";
import SiapaBatchSE from "./components/SiapaBatchSE";
import DuaTipe from "./components/DuaTipe";
import CompangCamping from "./components/CompangCamping";
// ..
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
        <DuaTipe />
        <SiapaBatchSE />
        <Sidebar />
        <Character />
        <Footer />
      </div>
    </>
  );
};

export default App;
