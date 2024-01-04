import React, { Suspense, lazy, useEffect, useState, useContext } from "react";
import userContext from "./utils/userContext.js";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import Header from "./Components/Header.js";
import Restaurantmenu from "./Components/RestaurantMenu.js";
import "./index.css";
import HomepageSkeleton from "./lib/Skeleton/HomepageSkeleton.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./Components/Cart.js";
const Contact = lazy(() => import("./Components/Contact.js"));

const Applayout = () => {
  const [userName, setUserName] = useState("Harsh");

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<HomepageSkeleton />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/Restaurant/:id",
        element: <Restaurantmenu />,
      },
      {
          path : "/Cart",
          element: <Cart/>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
