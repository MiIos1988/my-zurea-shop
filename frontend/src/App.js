import LoginSectionComponent from "./components/loginSection/LoginSectionComponent";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <>
      <LoginSectionComponent />
    </>
  );
}

export default App;
