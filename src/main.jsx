import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Loader from "./components/Loader.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("https://coffee-store-server-ivory-nine.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-ivory-nine.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/update-coffee/:id",
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-ivory-nine.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/users",
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("https://coffee-store-server-ivory-nine.vercel.app/users"),
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
