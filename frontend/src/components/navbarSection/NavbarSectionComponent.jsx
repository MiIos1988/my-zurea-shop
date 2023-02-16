import imgLogo from "../../assets/imgs/navbar/logo.jpg";
import { Link } from "react-router-dom";
import basket from "../../assets/imgs/navbar/sprite.png";

const NavbarSectionComponent = () => {
  return (
    <div className="navbarWrap container-fluid">
      <div className=" navbarSection d-flex row">
        <div className="logoSection col-3">
          <img src={imgLogo} alt="" />
        </div>
        <div className="headerMenu col-6 just">
          <ul className="d-flex justify-content-center">
            <li>
              <Link to={"/"}> Home </Link>{" "}
            </li>
            <li>
              <Link> Shoes </Link>{" "}
            </li>
            <li>
              <Link> Watch </Link>{" "}
            </li>
            <li>
              <Link> More </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="navRight col-3 d-flex">
          <div className="account"></div>
          <div className="basketCart d-flex align-items-center ">
            <div className="basketImg"></div>
            <p>Cart - 0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSectionComponent;
