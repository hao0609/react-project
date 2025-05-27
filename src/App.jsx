
import { useState } from "react";
import { Routes, Route, Link,Outlet } from 'react-router-dom'
// React router 方法

// Routes 路由配置表 路由配置表
// Route 各路由位址配置
// Link 路由連結 (VUE - RouterLink)
// Outlet 用來顯示子組件路由切換畫面的區域

import Header from './component/Header.jsx'
import ToDoList from './component/ToDoList.jsx'
import Api from './component/Api.jsx'
import UserPage from "./component/UserPage.jsx";

import { useNavigate } from 'react-router-dom'
// Router - 不用 Link 切換頁面方法 - useNavigate (類似 VUE Router.push)

import RouterSetting from "./router/router.jsx";

function App() {

  const name = 'Peter'
  
  //先取得 useNavigate 方法
  const navigate = useNavigate()
  
  const GotoToDoList = () =>{
    // 在使用並給 URL
    navigate('/ToDoList')

  }

  return (
    <>
        <Header/>
        <h1>Hello! My Name is {name}</h1>
        
        
        <Link to="/ToDoList">To-Do List</Link><br />
        <Link to="/Api">Api</Link><br />
        <Link to="/UserPage/F12345678/Menson">UserID 是 F12345678 name 是 Menson</Link><br /><br />
        <button onClick={GotoToDoList}> GotoToDoList </button>

        <Outlet/>

        <RouterSetting/>

    </>

  )
}




export default App


