import { IoIosArrowDown } from 'react-icons/io';
import NavbarLinkComponent from "./NavbarLinkComponent";

const HeaderMenuComponent = () => {
  return (
    <div className="headerMenu col-6 just">
      <ul className="d-flex justify-content-center">
        <li>
          <NavbarLinkComponent title={'Home'} redirectUrl={"/"} />
        </li>
        <li>
          <NavbarLinkComponent title={'Shoes'} redirectUrl={"/"} icon={<IoIosArrowDown />} />
        </li>
        <li>
          <NavbarLinkComponent title={'Watch'} redirectUrl={"/"} />
        </li>
        <li>
          <NavbarLinkComponent title={'More'} redirectUrl={"/"} icon={<IoIosArrowDown />} />
        </li>
      </ul>
    </div>
  )
}

export default HeaderMenuComponent
