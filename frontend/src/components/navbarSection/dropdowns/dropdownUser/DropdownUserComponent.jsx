import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../../../redux/userSlicer";

const DropdownUserComponent = () => {
  const dispatch = useDispatch();

  const userStore = useSelector((state) => state.userStore.user);

  useEffect(() => {
    console.log(userStore);
  }, [userStore]);

  const onLogOut = () => {
    dispatch(removeUser());
    localStorage.removeItem("ZU");
  };

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
          {!userStore?.email ? (
            <Link to={"/login"}>Sign in</Link>
          ) : (
            <Link to={"/"} onClick={onLogOut}>
              Log out
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DropdownUserComponent;
