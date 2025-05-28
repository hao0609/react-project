import { Routes, Route  } from "react-router-dom";
import App from "../App";
import ToDoList from '../component/ToDoList.jsx'
import Api from '../component/Api.jsx'
import UserPage from "../component/UserPage.jsx";
import LoginPage from "../page/LoginPage.jsx";

// React router 方法

// Routes 路由配置表 路由配置表
// Route 各路由位址配置
// Link 路由連結 (VUE - RouterLink)
// Outlet 用來顯示子組件路由切換畫面的區域

const RouterSetting = () => {
    return (
        <>
            {/* 一般路由寫法 */}
            
                {/* <Routes>
                    <Route path="/ToDoList" element={<ToDoList/>} />
                    <Route path="/Api" element={<Api/>} />
                    :id :name 為添加 URL 參數
                    <Route path="/UserPage/:id/:name" element={<UserPage/>}/>
                </Routes>  */}
           

            {/* 巢狀路由寫法 */}

            <Routes>
                {/* 用父祖件的 Route 路徑包住 子組件  Route 路由位址配置 */}
                <Route path="/" element={<App/>}>
                    <Route index element={<ToDoList/>} />
                    <Route path="Api" element={<Api/>} />
                    {/* :id :name 為添加 URL 參數 */}
                    <Route path="UserPage/:id/:name" element={<UserPage/>}/>
                </Route>
                <Route path="/Login" element={<LoginPage/>}/>
            </Routes>

        </>
    )
}
export default RouterSetting