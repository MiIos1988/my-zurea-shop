import axios from "axios";
import { Outlet } from "react-router-dom";
import LoginSectionComponent from "./components/loginSection/LoginSectionComponent";
import NavbarSectionComponent from "./components/navbarSection/NavbarSectionComponent";

axios.defaults.baseURL = "http://localhost:5050/api";

function App() {
  return (
    <>
      <NavbarSectionComponent />
      <Outlet />
    </>
  );
}

export default App;
