import { useState } from "react";
import TaskList from '../component/TaskList'

const ToDoList = ()=>{

  // 如果是儲存資料用途，Vue 的 ref 對應 React 的 useState
  // 用 useState 宣告變數以及值變更的 callback function

  // EX: const [value,NewValue]= useState(0)

  // task 為 工作項目 newTask 為更新 task 的方法
  const [task,newTask] = useState('')
  
  // taskList 為 工作項目列表 newTaskList 為更新 taskList 的方法
  const [taskList,newTaskList]=useState([])

  // input 輸入框內容變更時更新 task 的值
  const Change = (e) =>{
    newTask(e.target.value)
  }  

  // 添加 task 至 tasklist
  const add_list = () =>{
    // 若 task 不等於空字串時才添加
    if (task !== '') {
      newTaskList([...taskList,task])
    }
    // 清空 task (輸入框內容)
    newTask('')
  }

  // 刪除 task 並更新 tasklist (提供 delete_task 方法 props 給 TaskList 子組件)
  // index 來自 TaskList 子組件所點擊的該 task 項目 index 值
  const delete_task = (index)=>{
    // 利用 filter 篩選回傳不是 該 index 值的新陣列
    let setNewTaskList = taskList.filter((_,i)=>i !== index)
    // 更新新陣列
    newTaskList(setNewTaskList)
  }

  return(

    <>
        <h1>To-Do List</h1>

        <input type="text" value={task} onChange={Change}/>

        <button onClick={add_list}>add</button>
        {/* props 提供 taskList (task陣列清單) 跟 delete_task(刪除 task 方法) 給 TaskList子組件 */} 
        <TaskList  taskList={taskList} delete_task={delete_task}/>
    
    </>
  )



}
export default ToDoList