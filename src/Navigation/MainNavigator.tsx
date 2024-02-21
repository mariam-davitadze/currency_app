import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>main</div>,
    // children: []
  },
  {
    path: "*",
    element: <div>not found page</div>,
  },
]);

const MainNavigator = () => {
  return <RouterProvider router={router} />;
};

export default MainNavigator;
