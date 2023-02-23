import React from 'react'
import DropdownUserComponent from '../dropdowns/dropdownUser/DropdownUserComponent'
import { useState } from "react"
import SearchElementComponent from './SearchElementComponent'

const NavbarRightComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navRight col-3 d-flex justify-content-end">
      <div className="searchWrap d-flex align-items-center me-1">
        <SearchElementComponent />
        <DropdownUserComponent open={open} />
      </div>

      <div className="accWrap d-flex align-items-center me-3">
        <div className="account" onClick={() => { setOpen(!open) }}></div>
      </div>
      <div className="basketCart d-flex align-items-center  ">
        <div className="basketImg"></div>
        <p>Cart - 0</p>
      </div>
    </div>
  )
}

export default NavbarRightComponent
