import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { UnknownLayout } from "../layout/UnknownLayout";
import { SignupPage } from "../pages/SignupPage";
import { LoginPage } from "../pages/LoginPage";
import AuthUser from "./Authuser";
  
 export const router = createBrowserRouter([
    { 

        //Unknown Users

      path: "/",
      element: <UnknownLayout/>,

    //   children: [
    //     {
    //       path: "Home",
    //       element: <Home />,
    //     },
    //     {
    //       path: "signup",
    //       element: <SignupPage />,
    //     },
    //     {
    //       path: "login",
    //       element: <LoginPage />,
    //     },
  
    //     // Logined users


    //     {
    //       path: "user",
    //       element: <AuthUser />,
  
    //       children: [
    //         {
    //           path: "profile",
    //           element: <ProfilePage />,
    //         },
    //         {
    //           path: "/restaurants/:id",
    //           element: <ResDetails />,
    //         },
    //       ],
    //     },
    //   ],
    },
  ]);
  

