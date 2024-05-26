import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="fixed  bottom-6 p-2  left-0 right-0 m-auto  w-[290px] h-[30px] rounded-md flex items-center justify-evenly bg-white shadow-sm shadow-slate-400 z-[99999999]">
        <a href="#jumbotron">
          <FaHome className="text-black" />
        </a>
        <a href="#video">
          <FaVideo className="text-black" />
        </a>
        <a href="#storyimage">
          <FaPhotoVideo className="text-black" />
        </a>
        <a href="#youtube">
          <FaYoutube className="text-black" />
        </a>
        <a href="#farewell">
          <HiOutlineEmojiSad className="text-black" />
        </a>
        <a href="#character">
          <IoMdPerson className="text-black" />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
