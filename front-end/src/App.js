import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Base from './page/Base';
import Landing from './page/Landing';
import Blog from "./page/Blog";
import Event from "./page/Event";
import ContactUs from "./page/ContactUs";
import AboutUs from "./page/AboutUs";
import { useEffect } from "react";

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Base />, children: [
        { index: true, element: <Landing /> },
        { path: "blogs", element: <Blog /> },
        { path: "events", element: <Event /> },
        { path: "contact-us", element: <ContactUs /> },
        { path: "about-us", element: <AboutUs /> },
      ]
    }
  ]);

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  );
}

export default App;
