import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import NavbarSectionComponent from "./components/navbarSection/NavbarSectionComponent";
import { saveUser } from "./redux/userSlicer";

axios.defaults.baseURL = "http://localhost:5050/api";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("ZU")) {
      dispatch(saveUser(JSON.parse(localStorage.getItem("ZU"))));
    }
  }, []);

  return (
    <>
      <NavbarSectionComponent />
      <Outlet />
    </>
  );
}

export default App;
