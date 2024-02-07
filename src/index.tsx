import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/auth/Login";
import { Deposite } from "./pages/deposite/Deposite";
import { Bet } from "./pages/bet/Bet";
import { Withdraw } from "./pages/withdraw/Withdraw";
import { DepositeNew } from "./pages/deposite/DepositeNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/deposite",
    element: <Deposite />,
  },
  {
    path: "/deposite/new",
    element: <DepositeNew />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
  },

  {
    path: "/bet",
    element: <Bet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
