import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./Layout/Dashboard";
import Home from "./pages/Home";


const router = createBrowserRouter([
       {
            path: "/",
            element: <Dashboard />,
            children: [
                 {
                     path: "",
                     element: <Home />,
                 }
            ]
       }
]);


export default router;