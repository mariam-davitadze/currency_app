import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>main</div>,
    // children: []
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
