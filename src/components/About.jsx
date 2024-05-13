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
            Bunga-bunga Bertaburan, Ini Keseruan Shooting Video Reveal. Untuk
            pertama kalinya, kita shooting bareng ber-13 sambil catwalk dan
            bergaya layaknya lo adalah seorang model. Tenang, bakal diajarin
            dulu kok catwalknya sampe lo pede di depan kamera. Pokoknya di momen
            ini lo tuh bakal jadi cakep banget deh!! Yang cowok, rambut lo bakal
            dicukur secara gratis karena di support sama Cretivox, pokoknya
            rambut lo bakal dibuat keren biar jadi makin ganteng sampe
            cewek-cewek pada naksir. Dan yang cewek lo akan didandani jadi
            cantik. Perpaduan outfit dengan warna merah, hijau, putih, dan hitam
            yang melambangkan Batch S.E. Dengan bertaburan bunga, shooting ini
            dimulai dari pagi sampe malam dengan penuh keseruan dan kebahagiaan.
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
