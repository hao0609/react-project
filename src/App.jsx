
import { useState,useEffect } from "react";
import Header from './component/Header.jsx'
import TaskList from './component/TaskList.jsx'



function App() {

// 如果是儲存資料用途，Vue 的 ref 對應 React 的 useState
// 用 useState 宣告變數以及值變更的 callback function

// EX: const [value,NewValue]= useState(0)

  const [task,newTask] = useState('')
  const name = 'Peter'
  const [taskList,newTaskList]=useState([])

  const Change = (e) =>{
    newTask(e.target.value)
  }  


  const add_list = () =>{
    if (task !== '') {
      newTaskList([...taskList,task])
    }

  }

  const delete_task = (index)=>{
    console.log(index);

  }

  // React 的生命週期 useEffect 
  // useEffect (()=>{},[])
  // 若後方為空陣列，代表組件掛載時會執行一次 (等於 VUE onMounted)
  // 若後方為陣列裡放偵測的資料，組件掛載時會執行一次，資料變動時會再次執行  
  // (類似 VUE watch，但 watch 預設組件掛載時不會執行一次)
  // ex:  useEffect(() => {function}, [value1,value2])，只要其中一筆資料變動就會執行
  
  // useEffect(()=>{
  //   console.log(taskList);
    
  // },[taskList])
  

  return (
    <>
        <Header/>
        <h1>Hello! My Name is {name}</h1>
        <h1>To-Do List</h1>

        <input type="text" value={task} onChange={Change}/>

        <button onClick={add_list}>add</button>
        <TaskList  taskList={taskList} delete_task={delete_task}/>
   </>

   
  )
}




export default App


