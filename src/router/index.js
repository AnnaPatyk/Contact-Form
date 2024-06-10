import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactsManager from "../components/ContactsManager";
export const router = createBrowserRouter([
   {
      path:"/",
      element:<App></App>,
      children:[
         {
            index:true,
            element:<ContactsManager/>
         }
      ]
   }
])