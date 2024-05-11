import About from "./components/About";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import Character from "./components/Character";
import Story from "./components/Story";
// ..
AOS.init();

const App = () => {
  return (
    <>
      <div className="bg-black text-white overflow-hidden">
        <Navbar />
        <Jumbotron />
        <Story />
        <About />
        <Sidebar />
        <Character />
      </div>
    </>
  );
};

export default App;
