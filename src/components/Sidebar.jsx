import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";

const Sidebar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <div className="fixed  bottom-3 p-2  left-0 right-0 m-auto  w-[290px] h-[30px] rounded-md flex items-center justify-evenly bg-white shadow-sm shadow-slate-400 z-[99999999]">
        <a href="#jumbotron">
          <FaHome className={`${isDarkMode ? "text-black" : "text-black"}`} />
        </a>
        <a href="">
          <FaPhotoVideo
            className={`${isDarkMode ? "text-black" : "text-black"}`}
          />
        </a>
        <a href="">
          <FaVideo className={`${isDarkMode ? "text-black" : "text-black"}`} />
        </a>
        <a href="">
          <IoMdPerson
            className={`${isDarkMode ? "text-black" : "text-black"}`}
          />
        </a>
        <a href="">
          <FaVideo className={`${isDarkMode ? "text-black" : "text-black"}`} />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
