import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Size from "./components/Size";

import Contacticon from "./components/Contacticon";
import { Toaster } from "react-hot-toast";
import "./i18n";
import "./App.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {   AuthContextProvider } from "./contexts/AuthContext";
import BookEvent from "./routes/BookEvent/BookEvent";
import Career from "./routes/Career/Career";
import Contact from "./routes/Contact/Contact";
import Detail from "./routes/Donation/Detail";
import Donation from "./routes/Donation/Donation";
import EditProfile from "./routes/EditProfile/EditProfile";
import ErrorPage from "./routes/ErrorPage";
import EventsAll from "./routes/EventsAll/EventsAll";
import Gallery from "./routes/Gallery/Gallery";
import Home from "./routes/Home";
import Humanitarian from "./routes/Humanitarian/Humanitarian";
import ForgatePassword from "./routes/Login/ForgatePassword";
import Login from "./routes/Login/Login";
import NewPassword from "./routes/Login/NewPassword";
import News from "./routes/News/News";
import NewsBlog from "./routes/NewsBlog/NewsBlog";
import Openimage from "./routes/Openimage/Openimage";
import PEK from "./routes/PEK/PEK";
import First from "./routes/PEP/PEP";
import PR1 from "./routes/PR/PR1";
import Profile from "./routes/Profile/Profile";
import RVK from "./routes/RVK/RVK";
import Signup from "./routes/Signup/Signup";
import VerifyUser from "./routes/VerifyUser/index.jsx";
import Volunteer from "./routes/Volunteer/Volunteer";
import AuthVerify from "./routes/Signup/AuthVerify";
import QuickDetails from "./routes/RVK/QuickDetails";

  
const AppLayout = () => {
  return (
    <>
      <Size />
      <Outlet />
      <Contacticon />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
 
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "humanitarian",
        element: <Humanitarian />,
      },
      {
        path: "pep",
        element: <First />,
      },
      {
        path: "pek",
        element: <PEK />,
      },
      {
        path: "rvk",
        element: <RVK />,
      },
      {
        path:"qlinks/:id",
        element:<QuickDetails/>
      },
      {
        path: "pr",
        element: <PR1 />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "login/signup/login",
        element: <Login />,
      },
      {
        path: "forgatepassword",
        element: <ForgatePassword />,
      },
      {
        path: "newpassword",
        element: <NewPassword />,
      },
      {
        path: "donation",
        element: <Donation />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login/signup",
        element: <Signup />,
      },
      {
        path: "otp",
        element: <AuthVerify />,
      },
      {
        path: "eventsall",
        element: <EventsAll />,
      },
      {
        path: "event/:id/details",
        element: (
          <ProtectedRoute>
            <BookEvent />
          </ProtectedRoute>
        ),
      },
      {
        path: "newsblog/:id",
        element: <NewsBlog />,
      },
      {
        path: "profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>   ,
      },
      {
        path: "profile/editprofile",
        element:  <ProtectedRoute><EditProfile /> </ProtectedRoute>  ,
      },
      {
        path: "openimage",
        element: <Openimage />,
      },
      {
        path: "verify-user",
        element: <VerifyUser />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </AuthContextProvider>
);
