import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Valunteer from "./containers/Volunteer";
import NoPage from "./containers/NoPage";
import Events from "./containers/Event";
import NGOComponent from "./containers/NGO";
import App from "./containers/App";
import NavComponent from "./containers/Navbar/navbar";
import LoginVolunteer from "./containers/Login/Login";
import LoginNGO from "./containers/LoginNGO/LoginNGO";
import NGOland from "./containers/NGOland/NGOland";
import Volpro from "./containers/VolunteerProfile/volpro";
import AboutUs from "./containers/About/aboutus";
import ShowReg from "./containers/ShowReg/ShowReg";
import Areyou from "./containers/Are_you/Are_you";
import NGOList from "./containers/NGOList/NGOList";
import ContactUs from "./containers/ContactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/volunteer/add",
    element: <Valunteer />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },

  {
    path: "/events/add",
    element: <Events />,
  },
  {
    path: "/ngo/add",
    element: <NGOComponent />,
  },
  {
    path: "/forms",
    element: ":",
  },
  {
    path: "/profile",
    element: <NavComponent />,
  },
  {
    path: "/volunteer/login",
    element: <LoginVolunteer />,
  },
  {
    path: "/ngo/login",
    element: <LoginNGO />,
  },
  {
    path: "/ngo/profile",
    element: <NGOland />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/volunteer/profile",
    element: <Volpro />,
  },
  {
    path: "/login",
    element: <Areyou />,
  },
  {
    path: "/showreg",
    element: <ShowReg />,
  },
  {
    path: "/ngolist",
    element: <NGOList />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
