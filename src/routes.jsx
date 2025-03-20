import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./Layout/Dashboard";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio";


const router = createBrowserRouter([
       {
            path: "/",
            element: <Dashboard />,
            errorElement: <ErrorPage />,
            children: [
                 {
                     path: "",
                     element: <Home />,
                 }, 
                 {
                   path: "/about",
                   element: <About />,
                 },
                 {
                    path: "/contact",
                    element: <Contact />,
                 },
                 {
                    path: "/services",
                    element: <div>Services</div>,
                 },
                 {
                    path: "/portfolio",
                    element: <div>Portfolio</div>,
                 }
            ]

       }
]);


export default router;