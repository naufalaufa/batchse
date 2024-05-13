import Video from "../../public/IGDownloader.App_3281478362405073657.mp4";
import PropTypes from "prop-types";

const About = () => {
  return (
    <section className="w-full m-auto  place-content-center min-h-screen grid grid-cols-2 mt-28">
      <div className="mt-3 p-3">
        <video
          controls
          autoPlay
          loop
          className="w-[370px] m-auto h-full"
          src={Video}
        >
          <source src={Video} />
        </video>
      </div>
      <div className="grid grid-col-2 mt-5">
        <div className="max-w-[500px]">
          <h1 className="text-md font-bold sm:text-4xl md:text-5xl whitespace-nowrap">
            Reveal Video
          </h1>
          <p className="text-[8px]   max-w-[155px] sm:max-w-full sm:text-sm mt-3">
            WELCOME TO CRETIVOX INTERNSHIP EXPERIENCE BATCH S.E.! Setelah
            melewati ratusan pendaftar lainnya, akhirnya telah terpilih 13 anak
            muda dengan keunikannya masing-masing. Dengan bangga kami
            mempersembahkan... 🌸SPECIAL EDITION🌸
          </p>
          <p className="text-[8px] max-w-[155px] sm:max-w-full sm:text-sm mt-3 ">
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Syifa - Intern Content Creator - Universitas Multimedia
              Nusantara
            </p>

            <p className=" my-1 text-[5px] whitespace-nowrap sm:text-xs">
              {" "}
              - Valez - Intern Content Creator - Telkom University
            </p>
            <p className=" my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Nabila - Intern Graphic Designer - Telkom University
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Arrizky - Intern Copywriter - Universitas Bhayangkara
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Dafiz - Intern Production - UPN Veteran Jakarta
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Daffa - Intern KOL Specialist - Universitas Terbuka
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Dilah - Intern Production - Universitas Multimedia Nusantara
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Naufal - Intern Front End Developer - Universitas Terbuka
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Nadira - Intern Content Creator - UPN Veteran Jakarta
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Rifqi - Intern Graphic Designer - Binus University
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Dinda - Intern Copywriter - Universitas Padjadjaran
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Fawwaz - Intern Video Editor - Politeknik Negeri Media Kreatif
              Jakarta
            </p>
            <p className="my-1 text-[5px] whitespace-nowrap sm:text-xs">
              - Kenny - Intern KOL Specialist - LSPR Jakarta
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
