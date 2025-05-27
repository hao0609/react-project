import { Routes, Route  } from "react-router-dom";
import App from "../App";
import ToDoList from '../component/ToDoList.jsx'
import Api from '../component/Api.jsx'
import UserPage from "../component/UserPage.jsx";

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
                    <Route path="ToDoList" element={<ToDoList/>} />
                    <Route path="Api" element={<Api/>} />
                    {/* :id :name 為添加 URL 參數 */}
                    <Route path="UserPage/:id/:name" element={<UserPage/>}/>
                </Route>
            </Routes>

        </>
    )
}
export default RouterSetting