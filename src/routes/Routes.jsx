import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { Restaurant } from "../pages/Restaurant";
import { ContactUs } from "../pages/ContactUs";
import { RestaurantDetails } from "../pages/RestaurantDetails";
  
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children:[
        {
            path:"",
            element:<Home />
        },
        {
            path:"login",
            element:<LoginPage />
        },
        {
            path: "signup",
            element: <SignupPage />,
          },
          {
            path: "restaurant",
            element: <Restaurant />,
          },
          {
            path: "restaurant-details",
            element: <RestaurantDetails />,
          },
          {
            path: "contactus",
            element: <ContactUs />,
          },
      ]
    },
  ]);