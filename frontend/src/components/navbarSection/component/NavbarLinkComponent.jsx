import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinkComponent = (props) => {
    const { title, redirectUrl, icon } = props;

    return (
        <Link to={redirectUrl}>{title} {icon}</Link>
    )
}

export default NavbarLinkComponent
