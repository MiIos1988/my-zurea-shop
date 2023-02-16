import axios from "axios";
import LoginSectionComponent from "./components/loginSection/LoginSectionComponent";

axios.defaults.baseURL = "http://localhost:5050/api";

function App() {
  return (
    <>
      <LoginSectionComponent/>
    </>
  );
}

export default App;
