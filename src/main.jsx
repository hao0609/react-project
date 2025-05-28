import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 引入 React router
import { BrowserRouter } from "react-router-dom";
// import './index.css'
import App from './App.jsx'

// 引入 Router 配置表
import RouterSetting from "./router/router.jsx";

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* Add this for Router */}
    <BrowserRouter>
        <RouterSetting/>
    </BrowserRouter>
  </StrictMode>,
)
