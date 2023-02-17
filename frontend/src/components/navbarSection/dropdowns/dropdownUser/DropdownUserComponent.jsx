import { Link } from "react-router-dom"

const DropdownUserComponent = ({ open }) => {
    return (
        <div className={`dropdownMenu ${open ? 'active' : 'inactive'}`}>
            <ul>
                <li><Link className="linkDrop"> Wishlist (0)</Link></li>
                <li><Link> Compare (0) </Link></li>
                <li><Link to={"/login"}> Sign in </Link></li>
            </ul>


        </div >

    )
}

export default DropdownUserComponent
