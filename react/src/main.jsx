import React from 'react'
import ReactDOM from 'react-dom/client'
import {Contextprovider} from "./Components/contexts/ContextProvider.jsx";

import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextprovider>
      <RouterProvider router={router}/>
    </Contextprovider>
    
  </React.StrictMode>,
)
