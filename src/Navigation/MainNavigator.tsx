import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import SignIn from "../Pages/SignIn";
import MainView from "../MainView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const MainNavigator = () => {
  return <RouterProvider router={router} />;
};

export default MainNavigator;
