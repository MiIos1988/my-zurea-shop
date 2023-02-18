import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DropdownUserComponent = () => {
  const store = useSelector((state) => state);

  useEffect(() => {
    console.log(store);
  }, [store]);

  return (
    <div className={`dropdownMenu `}>
      <ul>
        <li>
          <Link className="linkDrop"> Wishlist (0)</Link>
        </li>
        <li>
          <Link> Compare (0) </Link>
        </li>
        <li>
          <Link to={"/login"}>Sign in</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownUserComponent;
