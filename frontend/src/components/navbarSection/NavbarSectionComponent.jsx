import imgLogo from "../../assets/imgs/navbar/logo.jpg";
import HeaderMenuComponent from "./container/HeaderMenuComponent";
import NavbarRightComponent from "./container/NavbarRightComponent";

const NavbarSectionComponent = () => {
  return (
    <div className="navbarWrap container-fluid">
      <div className=" navbarSection d-flex row">
        <div className="logoSection col-3">
          <img src={imgLogo} alt="logo" />
        </div>
        <HeaderMenuComponent />
        <NavbarRightComponent />

      </div>
    </div>
  );
};

export default NavbarSectionComponent;
