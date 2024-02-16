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
import { Settings } from "./pages/settings/Settings";
import { Faq } from "./pages/faq/Faq";
import { History } from "./pages/history/History";
import { Analytics } from "./pages/analytics/Analytics";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GoogleOAuthProvider clientId="1615663126-la4qosnrjjn1f34h9q518vqdidcj3a7f.apps.googleusercontent.com&as=6qkL%2Bx0FANQkmoo5RXSNvg">
        <Login />
      </GoogleOAuthProvider>
    ),
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
