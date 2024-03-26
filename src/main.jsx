import React from "react";
import ReactDOM from "react-dom/client";
import toast, { Toaster } from 'react-hot-toast';

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";



ReactDOM.createRoot(document.getElementById("root")).render(
 
   <> 
   <RouterProvider router={router} />
   <Toaster />

   </>

  
);
