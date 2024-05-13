import Video from "../../public/IGDownloader.App_3281478362405073657.mp4";

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
      <div className="grid grid-col-2 mt-5 ">
        <div className="max-w-[500px] ">
          <h1 className="text-sm  font-bold sm:text-4xl md:text-5xl whitespace-nowrap">
            Reveal Video
          </h1>

          <p className="text-[10px]  max-w-[155px]  sm:max-w-full sm:text-sm mt-3">
            WELCOME TO CRETIVOX INTERNSHIP EXPERIENCE BATCH S.E.! Setelah
            melewati ratusan pendaftar lainnya, akhirnya telah terpilih 13 anak
            muda dengan keunikannya masing-masing. Dengan bangga kami
            mempersembahkan... 🌸SPECIAL EDITION🌸
          </p>
          <p className="mt-4 text-[5px] max-w-[150px] sm:max-w-full m-auto sm:text-sm text-center">
            Music: Hamid El Shaeri - Ayonha by️ Habibi Funk Records
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
