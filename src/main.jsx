import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from "./Component/MyRoutes.jsx";
import './index.css'
import {HashRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
          <MyRoutes />
      </HashRouter>
  </React.StrictMode>,
)
