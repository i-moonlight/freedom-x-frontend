import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/auth/Login";
import { Deposit } from "./pages/deposit/Deposit";
import { Bet } from "./pages/bet/Bet";
import { Withdraw } from "./pages/withdraw/Withdraw";
import { DepositNew } from "./pages/deposit/DepositNew";
import { Settings } from "./pages/settings/Settings";
import { Faq } from "./pages/faq/Faq";
import { History } from "./pages/history/History";
import { Analytics } from "./pages/analytics/Analytics";
import { GoogleOAuthProvider } from "@react-oauth/google";

// 1615663126-la4qosnrjjn1f34h9q518vqdidcj3a7f.apps.googleusercontent.com
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
  {
    path: "/deposit/new",
    element: <DepositNew />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
  },

  {
    path: "/bet",
    element: <Bet />,
  },

  {
    path: "/settings",
    element: <Settings />,
  },

  {
    path: "/faq",
    element: <Faq />,
  },

  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
