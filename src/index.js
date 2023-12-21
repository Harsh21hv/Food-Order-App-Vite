import React, { Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import Header from "./Components/Header.js";
import Restaurantmenu from "./Components/RestaurantMenu.js";
import './index.css';
import HomepageSkeleton from "./lib/Skeleton/HomepageSkeleton.js";
const Contact = lazy(()=> import("./Components/Contact.js"));

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Suspense fallback={<HomepageSkeleton/>}><Contact /></Suspense> 
      },
      {
        path: "/Restaurant/:id",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
