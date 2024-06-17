import { createRoot } from "react-dom/client";

import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { patch } from "semver";
import Contact from "./src/components/Contact";
import route from "color-convert/route";
import Home from "./src/components/Home";
import CountryDetail from "./src/components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
   
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
