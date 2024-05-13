import CompangCampingImageOne from "../assets/image/compangCamping.jpg";

const CompangCamping = () => {
  return (
    <>
      <div className="w-full min-h-screen grid place-content-center">
        <h1 className="text-2xl text-center font-bold">Compang Camping</h1>
        <div>
          <img
            className="w-screen max-w-[90vw] h-full max-h-[100vh] aspect-square object-contain"
            src={CompangCampingImageOne}
            alt={CompangCampingImageOne}
          />
        </div>
      </div>
    </>
  );
};

export default CompangCamping;
