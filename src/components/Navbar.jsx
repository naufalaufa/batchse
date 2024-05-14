import PropTypes from "prop-types";

import LogoSE from "../assets/image/RESISTANCE IN BLOOM.png";

const Navbar = () => {
  return (
    <div className="navbar fixed top-[-19px] z-[9999999] ">
      <div className="flex-1">
        <img className="w-[200px] bg-cover ml-3" src={LogoSE} alt={LogoSE} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.any,
  setIsDarkMode: PropTypes.any,
};

export default Navbar;
