import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import About from "./page/About";
import AllFligth from "./page/allFligth/AllFligth";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/allfligth",
                element:<AllFligth/>
            }
        ]
    }
])


 export default router;