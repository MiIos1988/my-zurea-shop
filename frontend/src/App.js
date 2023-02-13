// import LoginSectionComponent from "./components/loginSection/LoginSectionComponent";
import axios from "axios";
import BasicInfoSectionComponent from "./components/basicInfoSection/BasicInfoSectionComponent";

axios.defaults.baseURL = "http://localhost:5050/api";

function App() {
  return (
    <>
      <BasicInfoSectionComponent />
    </>
  );
}

export default App;
