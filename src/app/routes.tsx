import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Help from "./pages/Help";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "catalog", Component: Catalog },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "about", Component: About },
      { path: "help", Component: Help },
    ],
  },
]);
