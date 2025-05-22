
import { useState } from "react";
import Header from './assets/component/Header.jsx'


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
    if(task !== ''){
    newTaskList([...taskList,task])
    // console.log(taskList);
    }
    newTask('')
  
  }
  

  return (
    <>
        <Header/>
        <h1>Hello! My Name is {name}</h1>
        <h1>To-Do List</h1>

        <input type="text" value={task} onChange={Change}/>

        <button onClick={add_list}>add</button>
        <ol>
          {
              taskList.map((item,index)=><li key={index}>{item}</li>)
          }
        </ol> 
   </>

   
  )
}




export default App


