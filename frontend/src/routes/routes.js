import LoginSectionComponent from "../components/loginSection/LoginSectionComponent";
import HomePageComponent from "../pages/HomePageComponent";
import App from "../App";
import ShopPageComponent from "../pages/ShopPageComponent";
import AdminPageComponent from "../pages/admin/AdminPageComponent";
import UserPageComponent from "../pages/admin/UserPageComponent";
import AdminGuardComponent from "../utils/AdminGuardComponent";

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
        element: <LoginSectionComponent />
      },
      {
        path: "/shop",
        element: <ShopPageComponent />
      },
      {
        path: "/shop/:searchParams",
        element: <ShopPageComponent />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <AdminPageComponent />,
    children: [{
      path: "",
      element: <AdminGuardComponent>
        <h1>Work</h1>
        <UserPageComponent />
      </AdminGuardComponent>
    }
    ]

  }
];

export default router