import VideoShootHiring from "../../public/IGDownloader.App_3363328606943714880.mp4";

const Farewell = () => {
  return (
    <div
      id="farewell"
      className="w-screen max-w-[85vw] my-36 m-auto min-h-screen grid place-content-center place-items-center"
    >
      <p className="font-bold text-center text-2xl my-3">Farewell</p>
      <video className="rounded-lg" loop controls src={VideoShootHiring}>
        <source src={VideoShootHiring} />
      </video>
      <p className="text-center my-3 text-[10px] sm:text-sm">
        Bunga menjadi saksi bisu perjalanan mereka. Hari demi hari terlewati dan
        banyak momen dan emosi yang tertanam, kini siap untuk mereka tuai.
      </p>
    </div>
  );
};

export default Farewell;
