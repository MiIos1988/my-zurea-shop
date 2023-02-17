import React from 'react'

const NavbarRightComponent = () => {
  return (
    <div className="navRight col-3 d-flex justify-content-end">
          <div className="searchWrap d-flex align-items-center me-1">
            <div className="search" style={{}}></div>
          </div>

          <div className="accWrap d-flex align-items-center me-3">
            <div className="account"></div>
          </div>
          <div className="basketCart d-flex align-items-center  ">
            <div className="basketImg"></div>
            <p>Cart - 0</p>
          </div>
        </div>
  )
}

export default NavbarRightComponent
