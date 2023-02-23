import LoginSectionComponent from "../components/loginSection/LoginSectionComponent";
import HomePageComponent from "../pages/HomePageComponent";
import App from "../App";
import ShopPageComponent from "../pages/ShopPageComponent";

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
      },
      {
        path: "/shop",
        element: <ShopPageComponent/>
      },
      {
        path: "/shop/:searchParams",
        element: <ShopPageComponent/>
      }
    ],
  },
];

export default router