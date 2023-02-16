import LoginSectionComponent from "../components/loginSection/LoginSectionComponent";
import HomePageComponent from "../pages/HomePageComponent";
import App from "../App";

const router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePageComponent />,
      },
      {
        path: "/login",
        element: <LoginSectionComponent/>
      }
    ],
  },
];

export default router