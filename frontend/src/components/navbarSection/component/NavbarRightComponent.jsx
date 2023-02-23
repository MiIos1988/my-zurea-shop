import React, { useEffect } from "react";
import DropdownUserComponent from "../dropdowns/dropdownUser/DropdownUserComponent";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const NavbarRightComponent = () => {
  const [open, setOpen] = useState(false);

  //*********When you click on any link close dropdown user******/
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  /************************************************************ */

  return (
    <div className="navRight col-3 d-flex justify-content-end">
      <div className="searchWrap d-flex align-items-center me-1">
        <SearchComponent />
        {open && <DropdownUserComponent />}
      </div>

      <div className="accWrap d-flex align-items-center me-3">
        <div
          className="account"
          onClick={() => {
            setOpen(!open);
          }}
        ></div>
      </div>
      <div className="basketCart d-flex align-items-center  ">
        <div className="basketImg"></div>
        <p>Cart - 0</p>
      </div>
    </div>
  );
};

export default NavbarRightComponent;
