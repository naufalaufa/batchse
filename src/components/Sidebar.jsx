import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Sidebar = () => {
  return (
    <>
      <div className="fixed  bottom-3 p-2  left-0 right-0 m-auto  w-[290px] h-[30px] rounded-md flex items-center justify-evenly bg-white shadow-sm shadow-slate-400 z-[99999999]">
        <a href="#jumbotron">
          <FaHome className="text-black" />
        </a>
        <a href="">
          <FaPhotoVideo className="text-black" />
        </a>
        <a href="">
          <FaVideo className="text-black" />
        </a>
        <a href="">
          <HiOutlineEmojiSad className="text-black" />
        </a>
        <a href="">
          <IoMdPerson className="text-black" />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
