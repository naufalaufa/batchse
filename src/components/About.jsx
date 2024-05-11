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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minus
            modi doloribus vitae doloremque ratione nam iure quisquam asperiores
            exercitationem laboriosam voluptatum accusantium, voluptate amet
            ipsam veniam explicabo voluptatibus nostrum.
          </p>
          <p className="text-[8px] max-w-[155px] sm:max-w-full sm:text-sm mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minus
            modi doloribus vitae doloremque ratione nam iure quisquam asperiores
            exercitationem laboriosam voluptatum accusantium, voluptate amet
            ipsam veniam explicabo voluptatibus nostrum.
          </p>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  isBlack: PropTypes.any,
  setIsBlack: PropTypes.any,
};

export default About;
